import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { SocketService } from 'src/services/socket/socket.service';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})

export class CarteraComponent implements OnInit {
  cliente:string=''
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

  public factura: [] = [];
  public codigo:number=0;
  public codigoComprobante:number=0;
  public fechaEmision:string="";
  public fechaVencimiento:string="";
  public dias:number=0;
  public totalFactura:number=0;
  public saldo:number=0;
  public nivel:number=0;

  displayedColumns: string[] = [
    'codigo',
    'codigoComprobante',
    'cliente',
    'fechaEmision',
    'fechaVencimiento',
    'dias',
    'totalFactura',
    'saldo',
    'estadoVencimiento',
  ];
  
  public totalCartera:number=0;
  public total_registros:number=0
  public obtenertodo:boolean=false
  pagina!:number
  constructor(
    private socketproduct: Socket_producto,
    private socketServices: SocketService,
    private servifactura:FacturaserviceService,
    private route: ActivatedRoute,
    private serviouth:AuthService
  ) { 
    this.serviouth.obtenernivel().subscribe(
      data=>{
        console.log(data)
        this.nivel=data.nivel
      }
    )
  }

  ngOnInit(): void {
     this.route.queryParams.subscribe((params) => {
      const pagina = Number(params['pagina']) || 0;
      this.pagina = pagina;
      if (this.pagina <= 0) {
        this.pagina = 1;
      }
      if (this.pagina > this.total_registros) {
        if (this.total_registros === 0) {
          this.pagina = 1;
        } else {
          this.pagina = this.total_registros;
        }
      }

      if(this.obtenertodo &&  this.clienteSeleccionado.codigo === 0){
        this. cargarcarteracompleta()
      }else{
          this.servifactura.traerfacturas(this.pagina,this.clienteSeleccionado.codigo)
      }

    

    });
    
    
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
  
   console.log(this.pagina)
   console.log(this.clienteSeleccionado.codigo)
   

  
   this.servifactura.traerfacturas(this.pagina, this.clienteSeleccionado.codigo).subscribe(
    data=>{
      this.obtenertodo=false
      console.log(data)
      this.pagina=1
      this.obtenertodo=false
      this.total_registros=data.nregistros
      this.factura=data.respuesta
      this.totalCartera=0
      this.totalCartera=data.saldo
    
    }
   )
    
  }

  cargarcarteracompleta(){
    console.log("cartera")
     this.cliente=''
       this.clientes=[]
     if(this.obtenertodo){
       this.servifactura.traertodaslasfacturas(this.pagina).subscribe(
      data=>{
      
        this.clienteSeleccionado= {
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

    
        this.total_registros=data.nregistros
      this.totalCartera=data.saldo
        this.factura=data.respuesta
      }
    )


     }else{
      if(this.clienteSeleccionado.codigo===0){

          this.factura=[]
          this.totalCartera=0
          this.total_registros=0
          this.pagina=1
      }
     }

   
  }


  
}
