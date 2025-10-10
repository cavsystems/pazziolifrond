import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';

@Component({
  selector: 'app-cuadre',
  templateUrl: './cuadre.component.html',
  styleUrls: ['./cuadre.component.scss']
})
export class CuadreComponent implements OnInit {
   almacen:string=""
   almacenes:any=[]
   saldo=0
   dataSource = new MatTableDataSource<any>([]);
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
      
     this.fechaInicial = new Date(2000, 0, 1);
     this.fechafinal=new Date();
   }
 cargaalmacen(valor:string){

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
  this.buscarfacturasxusuarios(cliente)
   }
 
    buscarfacturasxusuarios(clientea:any){
        console.log(`${this.fechaInicial.getFullYear()}-${this.fechaInicial.getMonth().toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${this.fechafinal.getMonth().toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `,clientea);
     this.socketproduct.consultarfacturasxusuario(clientea.codigo,`${this.fechaInicial.getFullYear()}-${this.fechaInicial.getMonth().toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth()+1).toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(
       async data=>{
         console.log("data",data)
         let aux:any=[]
         let auxdi:any=[]
        for (const element of data.factura) {
           let datarecibo:any=[]
           
            aux=[...aux,{documento:element.nombre+" "+element.codigo ,Fechadocumento:element.fechaEmision,
     debito:element.valorCXC,
     credito:0,
    saldoactual:element.saldo,}]
    console.log("codigos facturas",element,element.codigo)
       const data= await this.socketproduct.consultarrecibosxusuario(element.codigo,element.codigoComprobante
 ).toPromise()
          
       data.recibos.forEach((item:any)=>{
          let fechadocumen=new Date(item.fechaIngreso)
 
          datarecibo=[...datarecibo,{documento:item.nombre,Fechadocumento:`${fechadocumen.getFullYear()}-${(fechadocumen.getMonth()+1).toString().padStart(2,'0')}-${fechadocumen.getDate().toString().padStart(2, '0')}`,
     debito:0,
     credito:item.valor,
   }]
       })
   
 
      auxdi=[...auxdi,...datarecibo]
     
        auxdi= auxdi.sort((a:any,b:any)=>{
               if(new Date(a.Fechadocumento)>new Date(b.Fechadocumento)){
                 return 1;
               }
               if(new Date(a.Fechadocumento)<new Date(b.Fechadocumento)){
                 return -1
               }
               return 0
             })
 
         };
 
 
         
     /*    auxdi=auxdi.map((items:any)=>{
           if(items.debito>0){
             if(items.debito< this.saldo){
             this.saldo+=items.debito
 
             }
           }
             if(items.credito>0){
                this.saldo-=items.debito
             }
             // Devuelve un nuevo objeto (map SIEMPRE crea un nuevo array)
   return {
     ...items,
     saldoactual: this.saldo
   };
           
           
         })*/
         aux=[...aux,...auxdi]
 
         /*  aux=   aux.sort((a:any,b:any)=>{
               if(new Date(a.Fechadocumento)>new Date(b.Fechadocumento)){
                 console.log("mayor")
                 return 1;
               }
               if(new Date(a.Fechadocumento)<new Date(b.Fechadocumento)){
                 console.log("menor")
                 return -1
               }
               return 0
             })
             console.log("aux order",aux)*/
          aux= aux.map((items:any)=>{
 
           this.saldo+=items.debito-items.credito
             // Devuelve un nuevo objeto (map SIEMPRE crea un nuevo array)
   return {
     ...items,
     saldoactual: this.saldo
   };
           
           
         })
          console.log("datarecibossss", auxdi)
         console.log("aux array:", aux);
         this.dataSource.data = aux;
         console.log(aux)
       }
     )
 
   }

}
