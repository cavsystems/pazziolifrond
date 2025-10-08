import { Component, OnInit } from '@angular/core';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';

@Component({
  selector: 'app-auxcliente',
  templateUrl: './auxcliente.component.html',
  styleUrls: ['./auxcliente.component.scss']
})
export class AuxclienteComponent implements OnInit {
  data:any[]=[]
  cliente:string=''
  displayedColumns: string[] = [
    'Documento',
    'Fechadocumento',
    'debito',
    'credito',
    'saldoactual',
   
   
    
  ];
  autocompletarinputclient(valor:string){
  if (valor === '') {
      this.clientes = [];
    } else {
      this.socketproduct
        .obtenerInfo('terceros', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'nombres',
          consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion: valor ,
        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        this.clientes = JSON.parse(dato).mensajePeticion;
          }
        });
    }
  }
  
 fechafinal!: Date;
  fechaInicial!: Date;
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
  constructor( private socketproduct: Socket_producto) { }

  ngOnInit(): void {
  }
  seleccionarCliente(cliente:any){
  this.clienteSeleccionado.nombre = cliente.razonSocial;
    this.clienteSeleccionado.identificacion = cliente.identificacion;
    this.clienteSeleccionado.email = cliente.email;
    this.clienteSeleccionado.celulares = cliente.celulares;
    this.clienteSeleccionado.direccion = cliente.direccion;
    this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
    this.clienteSeleccionado.codigo = cliente.codigo;
    this.clienteSeleccionado.imagen = cliente.imagen || null;
    this.clienteSeleccionado.ciudad = cliente.municipio;
    this.cliente=''
    this.clientes = [];
  }
 
}
