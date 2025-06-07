import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { SocketService } from 'src/services/socket/socket.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recibodecaja',
  templateUrl: './recibodecaja.component.html',
  styleUrls: ['./recibodecaja.component.scss']
})
export class RecibodecajaComponent implements OnInit {
  cliente:string="";
  clientes:any[]=[]
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
    '*',
    'codigo',
    'codigoComprobante',
    'saldo',
    'abono',
    'almacen',
  ];
  public factura: [] = [];
  constructor(
    private socketproduct: Socket_producto,
    private socketServices: SocketService,
    private snackBar: MatSnackBar,
  ) { }
  public Movimiento = [ 'Seleccione', 'Efectivo', 'T.Credito', 'T.Debito', 'Cheque', 'Banco', 'Descuento'];
  public movimientoSeleccionado: string = 'Seleccione';
  displayedColumnsTipoPago: String[] = [
    'Movimiento',
    'valor',
  ];
  public valor: number= 0;
  public TipoPago = new MatTableDataSource<any>([]);
  public movimientoTipoPago= {
    Movimiento: 'Seleccione un cliente',
    valor: 0,
  };
  public totalRecibo: number=0;
  ngOnInit(): void {
  }

  autocompletarinputclient() {
    if ( this.cliente=== '') {
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
            console.log(JSON.parse(dato).mensajePeticion);
            this.clientes= JSON.parse(dato).mensajePeticion;
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
    this.socketServices.guardarcliente(cliente).subscribe();
  }

  seleccionaritem(item: string){
    console.log(item);
    console.log(this.TipoPago.data);

    if(this.valor <= 0){
      this.snackBar.open("El valor debe ser mayor a cero.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    const nuevoDato = {
      Movimiento: item,
      valor: this.valor,
    };
    const datosActuales = this.TipoPago.data;
    datosActuales.push(nuevoDato);
    this.TipoPago.data = [...datosActuales];
    
    this.valor = 0;
    this.movimientoSeleccionado = 'Seleccione';
  }
}
