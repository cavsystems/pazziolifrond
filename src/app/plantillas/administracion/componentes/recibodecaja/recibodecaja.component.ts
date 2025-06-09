import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { SocketService } from 'src/services/socket/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-recibodecaja',
  templateUrl: './recibodecaja.component.html',
  styleUrls: ['./recibodecaja.component.scss'],
})
export class RecibodecajaComponent implements OnInit {
  cliente: string = '';
  clientes: any[] = [];
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
  ) { }
  public Movimiento = ['Seleccione', 'Efectivo', 'T.Credito', 'T.Debito', 'Cheque', 'Banco', 'Descuento'];
  public movimientoSeleccionado: string = 'Seleccione';
  public Deduccion = [ 'Seleccione', 'Descuento', 'Rete Iva', 'Rete Ica', 'Rete Fuente'];
  public deduccionSeleccionada: string = 'Seleccione';
  displayedColumnsTipoPago: String[] = [
    'Movimiento',
    'valor',
  ];
  public valor: number= 0;
  public valorDeduccion:number =0;
  public TipoPago = new MatTableDataSource<any>([]);
  public movimientoTipoPago = {
    Movimiento: 'Seleccione un cliente',
    valor: 0,
  };
  public factura = new MatTableDataSource<any>([]);
  public codigo: number = 0;
  public codigoComprobante: number = 0;
  public totalFactura: number = 0;
  public saldo: number = 0;
  public nivel: number = 0;

  public totalRecibo: number=0;
  public totalCartera: number = 0;
  public total_registros: number = 0;
  public abono: number=0;
  public selected: boolean = false;
  codigoslect:number=0
  pagina!: number;
  public totalTiposPago: number=0;
  ngOnInit(): void {

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
            console.log(JSON.parse(dato).mensajePeticion);
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
         console.log(data)
        if (data.respuesta.length > 0) {
          this.pagina = 1;
          this.total_registros = data.nregistros;
          this.factura.data = data.respuesta;
        }
      });
  }

  seleccionaritem(item: string){
    /*console.log(item);
    console.log(this.TipoPago.data);*/
 

    if(item === "Seleccione"){
      this.snackBar.open("No ha seleccionado un tipo de pago","Cerrar",{
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      return;
    }

    if(this.totalRecibo === 0){
      this.snackBar.open("No ha definido valores en las facturas","Cerrar",{
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    if(this.valor <= 0){
      this.snackBar.open("El valor debe ser mayor a cero.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    if(this.valor>this.totalRecibo || (this.valor+this.totalTiposPago)>this.totalRecibo){
      this.snackBar.open("El valor no debe ser mayor al total del recibo.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    const index = this.TipoPago.data.findIndex(data => data.Movimiento === item);
    console.log(index);
    console.log(this.TipoPago);
    if(index>=0){
      this.TipoPago.data[index].valor=this.valor;
    }else{
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
    this.valor=(this.totalRecibo-this.totalTiposPago);
    this.movimientoSeleccionado = 'Seleccione';

    console.log(this.movimientoSeleccionado);
  }

  seleccionaritemDeduccion(item: string){
    /*console.log(item);
    console.log(this.TipoPago.data);*/

    if(item === "Seleccione"){
      this.snackBar.open("No ha seleccionado un tipo de pago","Cerrar",{
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valorDeduccion=0;
      return;
    }

    if(this.totalRecibo === 0){
      this.snackBar.open("No ha definido valores en las facturas","Cerrar",{
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valorDeduccion=0;
      this.deduccionSeleccionada="Seleccione";
      return;
    }

    if(this.valorDeduccion <= 0){
      this.snackBar.open("El valor debe ser mayor a cero.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    if(this.valorDeduccion>this.totalRecibo){
      this.snackBar.open("El valor no debe ser mayor al total del recibo.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    if((this.totalTiposPago-this.valorDeduccion)<0){
      this.snackBar.open("El valor de deduccion no debe ser mayor a tipo de pago.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    if(this.valorDeduccion>this.totalRecibo){
      this.snackBar.open("El valor no debe ser mayor al total del recibo.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    if((this.totalTiposPago-this.valorDeduccion)<0){
      this.snackBar.open("El valor de deduccion no debe ser mayor a tipo de pago.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      this.valor=0;
      this.movimientoSeleccionado="Seleccione";
      return;
    }

    const nuevoDato = {
      Movimiento: item,
      valor: - this.valorDeduccion,
    };
    const datosActuales = this.TipoPago.data;
    datosActuales.push(nuevoDato);
    this.TipoPago.data = [...datosActuales];
    
    this.valorDeduccion = 0;
    this.deduccionSeleccionada = 'Seleccione';

    this.totalizarTiposPago();
  }
  totalizarRecibo(valor:any){
     let subvalor=valor.abono
     if(valor.abono > valor.saldo){
      this.snackBar.open("El valor debe menor o igual al saldo de la factura.","Cerrar", {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }
     let index = this.factura.data.findIndex(datos=> datos.codigo === valor.codigo && datos.codigoComprobante === valor.codigoComprobante);
     this.factura.data[index].abono==valor.abono;
    console.log(valor.abono)
    this.totalizarPanelReciboIngreso();
  }

  onCheckChange(element: any){
    console.log(element)
    if(!element.selected){
      element.abono=0;
    }
    this.totalizarPanelReciboIngreso();
  }

  totalizarPanelReciboIngreso(){
   let acomulador=0
    const totalTemp=this.factura.data.reduce((sum: any, val: any) => sum + Number(val.abono),0);
    console.log(this.TipoPago)
  this.TipoPago.data.forEach(data=>{
    if(data.valor<0){
      acomulador+=data.valor
    }
  })
    console.log(acomulador);
    this.totalRecibo=totalTemp+acomulador;
    console.log(typeof  this.totalRecibo )
  }

  totalizarTiposPago(){
    console.log(this.totalTiposPago);
    const totalTemp=this.TipoPago.data.reduce((sum: any, tipo: any) => sum + tipo.valor,0);
    this.totalTiposPago=totalTemp;
    this.totalizarPanelReciboIngreso();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
