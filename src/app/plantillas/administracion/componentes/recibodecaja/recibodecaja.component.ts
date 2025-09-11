import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { SocketService } from 'src/services/socket/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosPedido } from 'src/app/modelos/datos-peticion copy';
import { MatDialog } from '@angular/material/dialog';
import { DialogoAlerta } from 'src/app/angular-material/alerta';
import { generatePDFingre } from './pdfingresos/pdf';
import { Recibopago } from 'src/app/angular-material/alertarecibo';
interface banco {
  codigo: number;
  nombre: string;
  codigoCuenta: number;
}
@Component({
  selector: 'app-recibodecaja',
  templateUrl: './recibodecaja.component.html',
  styleUrls: ['./recibodecaja.component.scss'],
})
export class RecibodecajaComponent implements OnInit {
  vendedor!: string;
  usuario!: string;
  cliente: string = '';
  clientes: any[] = [];
  razon!: string;
  direccion!: string;
  nit!: string;
  clienteSeleccionado = {
    nombre: 'Seleccione un cliente',
    identificacion: '',
    email: '',
    celulares: '',
    direccion: '',
    telefonoFijo: '',
    codigo: 0,
    imagen: null,
    ciudad: '',
  };
  displayedColumns: string[] = [
    'selected',
    'codigo',
    'codigoComprobante',
    'totalFactura',
    'saldo',
    'abono',
    'almacen',
  ];

  constructor(
    private socketproduct: Socket_producto,
    private socketServices: SocketService,
    private snackBar: MatSnackBar,
    private servifactura: FacturaserviceService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.servifactura.conectar();
  }
  public Movimiento = [
    'Seleccione',
    'Efectivo',
    'T.Credito',
    'T.Debito',
    'Cheque',
    'Banco',
  ];
  public movimientoSeleccionado: string | null = 'Seleccione';
  public Deduccion = [
    'Descuento',
    'Rete Iva',
    'Rete Ica',
    'Rete Fuente',
  ];
  public opcionesBanco: banco[] = [];
  public deduccionSeleccionada:  null |string = 'Seleccione';
  displayedColumnsTipoPago: String[] = ['Movimiento', 'valor', 'acciones'];
  public valor: number = 0;
  public valorDeduccion: number = 0;
  public TipoPago = new MatTableDataSource<any>([]);
  public movimientoTipoPago = {
    Movimiento: 'Seleccione un cliente',
    valor: 0,
    opcionBanco: '',
  };
  public factura = new MatTableDataSource<any>([]);
  public codigo: number = 0;
  public codigoComprobante: number = 0;
  public totalFactura: number = 0;
  public saldo: number = 0;
  public nivel: number = 0;

  public totalRecibo: number = 0;
  public totalCartera: number = 0;
  public total_registros: number = 0;
  public abono: number = 0;
  public selected: boolean = false;
  codigoslect: number = 0;
  pagina!: number;
  public totalTiposPago: number = 0;
  public descuento: number = 0;
  public bancoSeleccinado: string = '';
  public listadoOpcionesBancosElegido: [string, number][] = [];
  ngOnInit(): void {
    this.servifactura.traerbancos().subscribe((datos) => {
      this.opcionesBanco = datos.respuesta;
      this.nit = datos.nit;
      this.razon = datos.razon;
      this.direccion = datos.direccion;
    });
  }

  autocompletarinputclient() {
    if (this.cliente === '') {
      this.clientes = [];
    } else {
      this.socketproduct
        .obtenerInfo('terceros', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'nombres',
          consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion: this.cliente,
        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        this.clientes = JSON.parse(dato).mensajePeticion;
          }
        });
    }
  }

  seleccionarCliente(cliente: any) {
    this.clienteSeleccionado.nombre = cliente.razonSocial;
    this.clienteSeleccionado.identificacion = cliente.identificacion;
    this.clienteSeleccionado.email = cliente.email;
    this.clienteSeleccionado.celulares = cliente.celulares;
    this.clienteSeleccionado.direccion = cliente.direccion;
    this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
    this.clienteSeleccionado.codigo = cliente.codigo;
    this.clienteSeleccionado.imagen = cliente.imagen || null;
    this.clienteSeleccionado.ciudad = cliente.municipio;
    this.clientes = [];

    this.servifactura
      .traerfacturas(this.pagina, this.clienteSeleccionado.codigo)
      .subscribe((data) => {
                if (data.respuesta.length > 0) {
          this.pagina = 1;
          this.total_registros = data.nregistros;
          this.factura.data = data.respuesta;
        }
      });
  }

  seleccionaritem(item: string) {
    /*    console.log(this.TipoPago.data);*/

    if (item === 'Seleccione') {
      this.snackBar.open('No ha seleccionado un tipo de pago', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor = 0;
      return;
    }

    if (this.totalRecibo === 0) {
      this.snackBar.open('No ha definido valores en las facturas', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    if (this.valor <= 0) {
      this.snackBar.open('El valor debe ser mayor a cero.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor = 0;
       this.movimientoSeleccionado = null;
    setTimeout(() => {
        
  this.movimientoSeleccionado = 'Seleccione';
});
      return;
    }

    if (
      this.valor > this.totalRecibo ||
      this.valor + this.totalTiposPago + this.descuento > this.totalRecibo
    ) {
      this.snackBar.open(
        'El valor no debe ser mayor al total del recibo.',
        'Cerrar',
        {
          duration: 3000,
          panelClass: ['snackbar-error'],
        }
      );
      this.valor = 0;
       this.movimientoSeleccionado= null;
    setTimeout(() => {
        
  this.movimientoSeleccionado = 'Seleccione';
});
      return;
    }

    const index = this.TipoPago.data.findIndex(
      (data) => data.Movimiento === item
    );
            if (index >= 0) {
      this.TipoPago.data[index].valor = this.valor;
    } else {
      const nuevoDato = {
        Movimiento: item,
        valor: this.valor,
      };
      const datosActuales = this.TipoPago.data;
      datosActuales.push(nuevoDato);
      this.TipoPago.data = [...datosActuales];
    }

    this.totalizarTiposPago();

    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);

   this.movimientoSeleccionado = null;
    setTimeout(() => {
        
  this.movimientoSeleccionado = 'Seleccione';
});
    

      }

  seleccionaritemDeduccion(item: string) {
    /*    console.log(this.TipoPago.data);*/

    if (item === 'Seleccione') {
      this.snackBar.open('No ha seleccionado un tipo de pago', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valorDeduccion = 0;
      return;
    }

    if (this.totalRecibo === 0) {
      this.snackBar.open('No ha definido valores en las facturas', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valorDeduccion = 0;
       this.deduccionSeleccionada = null;
    setTimeout(() => {
        
  this.deduccionSeleccionada = 'Seleccione';
});
      return;
    }

    if (this.valorDeduccion <= 0) {
      this.snackBar.open('El valor debe ser mayor a cero.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    if (
      this.valorDeduccion > this.totalRecibo ||
      this.valorDeduccion + this.totalTiposPago + this.descuento >
        this.totalRecibo
    ) {
      this.snackBar.open(
        'El valor no debe ser mayor al total del recibo.',
        'Cerrar',
        {
          duration: 3000,
          panelClass: ['snackbar-error'],
        }
      );
      this.valorDeduccion = 0;
      this.valor = 0;
     this.deduccionSeleccionada = null;
    setTimeout(() => {
        
  this.deduccionSeleccionada = 'Seleccione';
});
      this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
      return;
    }

    const nuevoDato = {
      Movimiento: item,
      valor: -this.valorDeduccion,
    };
    const datosActuales = this.TipoPago.data;
    datosActuales.push(nuevoDato);
    this.TipoPago.data = [...datosActuales];

    

    this.totalizarDeducciones();

    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
   this.deduccionSeleccionada = null;
    setTimeout(() => {
        
  this.deduccionSeleccionada = 'Seleccione';
});
  }

  public totalizarDeducciones() {
    let contador = 0;
    this.TipoPago.data.forEach((data) => {
      if (data.valor < 0) {
        contador += data.valor * -1;
      }
    });

    this.descuento = contador;
  }
  totalizarRecibo(valor: any) {
    let subvalor = valor.abono;
    if (valor.abono > valor.saldo) {
      this.snackBar.open(
        'El valor debe menor o igual al saldo de la factura.',
        'Cerrar',
        {
          duration: 3000,
          panelClass: ['snackbar-error'],
        }
      );
      return;
    }
    let index = this.factura.data.findIndex(
      (datos) =>
        datos.codigo === valor.codigo &&
        datos.codigoComprobante === valor.codigoComprobante
    );
    this.factura.data[index].abono == valor.abono;
        this.totalizarPanelReciboIngreso();
    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  onCheckChange(element: any) {
        if (!element.selected) {
      element.abono = 0;
    }
    this.totalizarPanelReciboIngreso();
  }

  totalizarPanelReciboIngreso() {
    let acomulador = 0;
    const totalTemp = this.factura.data.reduce(
      (sum: any, val: any) => sum + Number(val.abono),
      0
    );
        this.TipoPago.data.forEach((data) => {
      if (data.valor < 0) {
        acomulador += data.valor;
      }
    });
        this.totalRecibo = totalTemp + (acomulador + this.descuento);
        this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  totalizarTiposPago() {
    let contador = 0;
    this.TipoPago.data.forEach((data) => {
      if (data.valor > 0) {
        contador += data.valor;
      }
    });

    this.totalTiposPago = contador;
  }

  eliminarTipoPago(item: any) {
            const index = this.TipoPago.data.findIndex(
      (data) => data.Movimiento === item.Movimiento
    );
        this.TipoPago.data.splice(index, 1);
    this.TipoPago.data = this.TipoPago.data;
    this.TipoPago._updateChangeSubscription();
        this.totalizarTiposPago();
    this.valor = 0;
    if (item.valor < 0) {
      this.descuento -= item.valor * -1;
    }
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  seleccionarOpcionBanco(banco: any, item: any) {
    if (banco === 'Seleccione Banco' || banco === 'Seleccione') {
      this.snackBar.open('No es una opcion de banco correcta', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
    }

    const nuevoDato = {
      Movimiento: item,
      valor: this.valor,
      opcionBanco: banco,
    };

    item.opcionBanco = banco;

      }

  crearReciboIngreso() {
    if (this.totalRecibo === this.totalTiposPago + this.descuento) {
      const dialogrfrecibo = this.dialog.open(DialogoAlerta, {
        data: {
          boton1: 'No',
          boton: 'Si',
          mensaje: 'Seguro desea crear este recibo de ingreso',
          tipo: 'question',
        },
        disableClose: false,
      });
      dialogrfrecibo.afterClosed().subscribe((data) => {
        if (!data) {
          return;
        } else {
          let concepto = 'Cancela/Abono: ';
          let facturasabonadas = this.factura.data.filter((data: any) => {
            if (data.abono > 0 && data.selected === true) {
              concepto += ' ' + data.codigo + ' ' + data.nombre;
              return data;
            }
          });
          console.log(
            'cliente seleccionado :',
            JSON.stringify(this.clienteSeleccionado)
          ); // si falla, este es el problema
          console.log('tipo pago', JSON.stringify(this.TipoPago.data)); // si falla, este
                    const datapeticion = {
            totalrecibo: this.totalRecibo,
            cliente: this.clienteSeleccionado,
            tipopago: this.TipoPago.data,
            facturas: facturasabonadas,
            concepto,
            descuento: this.descuento,
            observacion: '',
          };
          if (this.totalRecibo > 0 && this.totalTiposPago > 0) {
            this.servifactura
              .crearreciboingreso(datapeticion)
              .subscribe((datos) => {
                
                const dialogrf = this.dialog.open(DialogoAlerta, {
                  data: {
                    boton: 'Ok',
                    mensaje: datos.mensaje,
                    tipo: 'done',
                  },
                  disableClose: false,
                });

                dialogrf.afterClosed().subscribe(async (data) => {
                  if (data) {
                    let pdf = await generatePDFingre({
                      razon: this.razon,
                      nit: this.nit,
                      direccion: this.direccion,
                      recibidoDe: datos.datos[0].recibidoDe,
                      fechaIngreso: datos.datos[0].fechaIngreso,
                      valor: datos.datos[0].valor,
                      vendedor: datos.vendedor,
                      usuario: datos.usuario,
                      saldoactual: datos.saldoactual,
                      tipospagos: this.TipoPago,
                      codigoRI: datos.datos[0].codigo,
                      direccionc: this.clienteSeleccionado.direccion,
                      identificacion: this.clienteSeleccionado.identificacion,
                      concepto,
                      nombreComprobanteRI: datos.nombreComprobanteRI,
                    });

                    this.servifactura
                      .enviaremail({
                        cliente: this.clienteSeleccionado,
                        pdf: pdf,
                        email: '',
                      })
                      .subscribe((datos) => {
                        if (datos.estadoPeticion === 'Done') {
                          window.location.reload();
                        }
                      });
                  }
                });
              });
          } else {
            this.snackBar.open(
              'No hay datos cargados correctamente para crear el recibo',
              'Cerrar',
              {
                duration: 3000,
                panelClass: ['snackbar-error'],
              }
            );
          }
        }
      });
    } else {
      this.snackBar.open(
        'El total de los tipo de pago mas las deducciones no es igual al total del recibo',
        'Cerrar',
        {
          duration: 3000,
          panelClass: ['snackbar-error'],
        }
      );
    }
  }

  generarpdfingreso() {
    generatePDFingre({
      razon: this.razon,
      nit: this.nit,
      direccion: this.direccion,
    });
  }
  verrecibosdepago() {
    const dialogref = this.dialog.open(Recibopago, {
      width: '100%',
      height: '100vw',

      maxHeight: '90vh',
    });
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
}
