import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  bodegas:any[]=[]
  totalpositivo:number=0;
  totalglobal:number=0;
totalnegativo:number=0;
  bodegaSeleccionada:string=''
   displayedColumns: string[] = [
 
    'referencia',
    'descripcion',
     'cantidad',
   
   
    'costo',
    'precio1',
     'precio2',
      'precio3',

    'totalproducto',
    
   
  ];


   displayedColumns2: string[] = [
 
    'referencia',
    'descripcion',
      'cantidad',
    'costo',
    'precio1',
     'precio2',
      'precio3',
 
    
    'totalproducto'
  ];
   productos: any[] = [];
   nregistros:number=0
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

  encontrarnombretabla(id:number){
    const titulos=this.bodegas.find(item=> item.codigo===id)
    return titulos ? titulos.alias : ''; 
  }
  pagina=1
  cliente=""
obtenertodo=false
  constructor(
      private socketproduct: Socket_producto,private cdr: ChangeDetectorRef  ) {
    
         this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'bodega',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: '' ,
        })
           .pipe(take(1))
        .subscribe((dato) => {
           console.log("BODEAS ACTULES",JSON.parse(dato).mensajePeticion)
         this.bodegas = [...JSON.parse(dato).mensajePeticion];
        })
   }
  ngOnInit(): void {
    //nada
    this.obtenertodo=true
     this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: 1,
          pagina:1,
          bodega:''

        })
       
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                     this.totalglobal=JSON.parse(dato).inventariototal

          }              
        });
  }


  

  autocompletarinputclient(valor: string){
    this.pagina=1
      console.log("productos",this.productos)
    this.productos=[]
  
    console.log("clientes",valor)
    this.obtenertodo=false
    if (!valor || valor.trim() === '') {

      this.productos = [];
      return;
    } else {
      this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: valor.trim() ,
          bodega:this.bodegaSeleccionada
        })
          

        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

        
         this.productos = [...JSON.parse(dato).mensajePeticion];
               this.totalglobal=JSON.parse(dato).mensajePeticion.reduce((acum:any, item:any) => acum + item.cantidadtotal, 0)
         this.cdr.detectChanges();
          }
        });
    }

  }
cargabodega(valor: string){
  if(this.obtenertodo){
    this.pagina=1
    this.productos=[]
    this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.pagina ,
          pagina:this.pagina,
          bodega:valor

        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                              this.totalglobal=JSON.parse(dato).mensajePeticion.reduce((acum:any, item:any) => acum + item.cantidadtotal, 0)
          }
        });
  }else{
      this.pagina=1
    this.productos=[]
    if(this.cliente!==""){
     this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion:this.cliente ,
          bodega:valor
        })
          

        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

        
         this.productos = [...JSON.parse(dato).mensajePeticion];
         this.cdr.detectChanges();
         this.totalglobal=0

               this.totalglobal=JSON.parse(dato).mensajePeticion.reduce((acum:any, item:any) => acum + item.cantidadtotal, 0)
               console.log("totalglobal", this.totalglobal)
          }
        });
        }
  }
  
 
}

navegarpagina1(){

}
calcularpositivo(id:number){
  let contadorpositovo=0
  console.log("id codigo",id)
  const dato=this.productos.find(item=>{

    return item.codigo === id})
  console.log("codigoid",dato)
  if(dato.cantidad>=0){
    contadorpositovo+=dato.cantidad
  }
  
  if(dato.cantidad2>=0){
    contadorpositovo+=dato.cantidad2
  }
  if(dato.cantidad3>=0){
    contadorpositovo+=dato.cantidad3
  }
  if(dato.cantidad4>=0){
    contadorpositovo+=dato.cantidad4
  }
    if(dato.cantidad5>=0){
    contadorpositovo+=dato.cantidad5
  }
    if(dato.cantidad6>=0){
    contadorpositovo+=dato.cantidad6
  }

    if(dato.cantidad7>=0){
    contadorpositovo+=dato.cantidad7
  }
  
    if(dato.cantidad8>=0){
    contadorpositovo+=dato.cantidad8
  }
   if(dato.cantidad9>=0){
    contadorpositovo+=dato.cantidad9
  }

  if(dato.cantidad10>=0){
    contadorpositovo+=dato.cantidad10
  }
  return contadorpositovo
}


calcularnegativo(id:number){
  let contadorpositovo=0
  const dato=this.productos.find(item=> item.codigo === id)
  if(dato.cantidad<=0){
    contadorpositovo+=dato.cantidad
  }
  
  if(dato.cantidad2<=0){
    contadorpositovo+=dato.cantidad2
  }
  if(dato.cantidad3<=0){
    contadorpositovo+=dato.cantidad3
  }
  if(dato.cantidad4<=0){
    contadorpositovo+=dato.cantidad4
  }
    if(dato.cantidad5<=0){
    contadorpositovo+=dato.cantidad5
  }
    if(dato.cantidad6<=0){
    contadorpositovo+=dato.cantidad6
  }

    if(dato.cantidad7<=0){
    contadorpositovo+=dato.cantidad7
  }
  
    if(dato.cantidad8<=0){
    contadorpositovo+=dato.cantidad8
  }
   if(dato.cantidad9<=0){
    contadorpositovo+=dato.cantidad9
  }

  if(dato.cantidad10<=0){
    contadorpositovo+=dato.cantidad10
  }
  return contadorpositovo
}
cargarcarteracompleta(){
  console.log(">>> Ejecutando cargarcarteracompleta()");
  this.cliente=""
  this.pagina=1
  if(this.obtenertodo){
   this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.pagina ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada

        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                              this.totalglobal=JSON.parse(dato).mensajePeticion.reduce((acum:any, item:any) => acum + item.cantidadtotal, 0)
          }
        });
  }else{
    this.productos=[]
  }
 
}


onScroll(event: any){
    console.log(">>> Ejecutando onScroll()");
   const element = event.target;
   console.log(element.clientHeight)
   console.log((element.scrollHeight - element.scrollTop))
  // Detecta cuando llega al final del scroll
  if(this.obtenertodo){
  if ((element.scrollHeight - element.scrollTop)-1 === element.clientHeight) {
    console.log(this.pagina <= this.nregistros)
    if(this.pagina <= this.nregistros){
       this.pagina++
       console.log("pagina actual",this.pagina)
   const paginaactual=this.pagina+1
    console.log("pagina actual",paginaactual)
    console.log("Llegaste al final, traer más registros...");
    console.log("productos antes",this.productos)
    let pro=this.productos
    this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.pagina ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada
        })
        .subscribe((dato) => {
            console.log("productos antes",this.productos)
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

          
              JSON.parse(dato).mensajePeticion.forEach((item:any)=>{
            const existe = pro.some(p => p.codigo === item.codigo);
    if (!existe) {
      pro.push(item); // 👉 agrega al array existente
    }
              })
                    this.totalglobal=JSON.parse(dato).inventariototal
         console.log("productos despues",pro)  
  this.productos=[...pro]
  console.log(this.productos)
  return}
                    
          
        });
  }
  
  
  }
}

 
  
}


}
