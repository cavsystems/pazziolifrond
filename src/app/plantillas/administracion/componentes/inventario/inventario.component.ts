import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
interface grupos{
  codigo:number, nombre: string
}

interface lineas{
  codigo:number, nombre: string
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})

export class InventarioComponent implements OnInit {
  bodegas:any[]=[]
  cargando: boolean = false;
    totalpositivo:number=0;
  linea:string="0"
  grupo:string="0"
  grupos:grupos[]=[]
  lineas: lineas[]=[]
productchange=""
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
    if (this.cargando) return;
this.cargando = true;
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

         /*para  tenerlo en cuenta un socket con el mismo request si se ponen en varios metodos y se 
         jecuta en uno se puede ejecutar en otro metodo que lo aplica a la ves indirectamente 
         
         corrección 
         La verdad técnica (sin vueltas)
Un socket NO se ejecuta solo en otro método
LO QUE SE EJECUTA son otros MÉTODOS por eventos distintos, y cada uno vuelve a llamar al mismo socket
Si tienes el mismo request de socket en varios métodos

y el usuario (o Angular) dispara varios eventos

cada método hace su propia llamada

y las respuestas pueden llegar desordenadas

👉 Parece que “se ejecutan a la vez”, pero en realidad son llamadas independientes
por eso la variable cargando para  esperar entre solicitudes de socket y no ejecutar todas a la vez*/
              this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'lineas',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: '' ,
        })
           .pipe(take(1))
        .subscribe((dato) => {
           console.log("lineas ACTULES",JSON.parse(dato).mensajePeticion)
             this.lineas = [...JSON.parse(dato).mensajePeticion];
                 this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'grupos',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: '' ,
        })
           .pipe(take(1))
        .subscribe((dato) => {
           console.log("grupos ACTULES",JSON.parse(dato).mensajePeticion)
            this.grupos= [...JSON.parse(dato).mensajePeticion];
           this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion:this.productchange,
          pagina:1,
          bodega:'',
          linea:Number(this.linea),
          grupo:Number(this.grupo)

        })
       
        .subscribe((dato) => {
          this.cargando = false;
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                     this.totalglobal=JSON.parse(dato).inventariototal

          }else{
            this.productos=[]
            this.totalglobal=0
          }              
        });
     
        })


        })
        })



         
   }
  ngOnInit(): void {
    //nada
    this.obtenertodo=true
     
  }


  

  autocompletarinputclient(valor: string){
    if (this.cargando) return;
this.cargando = true;
    this.pagina=1
      console.log("productos",this.productos)
    this.productos=[]
  
    console.log("clientes",valor)
    this.obtenertodo=false
    if (!valor || valor.trim() === '') {

      this.productos = [];
      this.totalglobal=0
      this.cargando=false
      return;
    } else {
      this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: valor.trim() ,
          bodega:this.bodegaSeleccionada,
             
           linea:Number(this.linea),
          grupo:Number(this.grupo)
        })
          

        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

         console.log( "VALOR CONDICION", valor.trim() )
         this.productos = [...JSON.parse(dato).mensajePeticion];
         console.log("datos descriptraidos",JSON.parse(dato))
            this.totalglobal=JSON.parse(dato).inventariototal
         this.cdr.detectChanges();
          }else{
            
              this.productos =[];
        
            this.totalglobal=0
          }
        });
    }

  }
cargabodega(valor: string){
  console.log("cargando",this.cargando)
  if (this.cargando) return;
  
this.cargando = true;
  if(this.obtenertodo){
    this.pagina=1
    this.productos=[]
    this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion:this.productchange ,
          pagina:this.pagina,
          bodega:valor,
          linea:Number(this.linea),
          grupo:Number(this.grupo)

        })
        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                           this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }else{
      this.pagina=1
    this.productos=[]
    if(this.productchange!==""){
     this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion:this.productchange ,
          bodega:valor,
          linea:Number(this.linea),
          grupo:Number(this.grupo)
        })
          

        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

        
         this.productos = [...JSON.parse(dato).mensajePeticion];
         this.cdr.detectChanges();
         this.totalglobal=0
    this.totalglobal=JSON.parse(dato).inventariototal
               console.log("totalglobal", this.totalglobal)
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
        }else{
          this.cargando=false
           this.productos=[]
            this.totalglobal=0
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
  console.log("cargacompleta estado",this.cargando)
  if (this.cargando) return;
this.cargando = true;
    this.productchange=""
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
          bodega:this.bodegaSeleccionada,
           linea:Number(this.linea),
          grupo:Number(this.grupo)

        })
        .subscribe((dato) => {
              this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
        
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                                 this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }else{
         this.cargando=false
    this.productos=[]
    this.totalglobal=0
  }
 
}




onScroll(event: any){
  
       const element = event.target;
   console.log(element.clientHeight)
   console.log((element.scrollHeight - element.scrollTop))
 
  // Detecta cuando llega al final del scroll
  if(this.obtenertodo){
   const llegoAlFinal =
    element.scrollTop + element.clientHeight >= element.scrollHeight - 5;

  if (!this.obtenertodo) return;
  if (this.cargando) return;
  if (!llegoAlFinal) return;
  if (this.pagina >= this.nregistros) return;
      this.cargando = true; 
    console.log(this.pagina <= this.nregistros)
    if(this.pagina <= this.nregistros){
       this.pagina++
       console.log("pagina actual todo",this.pagina)
   //const paginaactual=this.pagina+1
   const paginaactual=this.pagina
    console.log("pagina actual",paginaactual)
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
          bodega:this.bodegaSeleccionada,
           linea:Number(this.linea),
          grupo:Number(this.grupo)
        })
    
        .subscribe((dato) => {
    this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

          
              JSON.parse(dato).mensajePeticion.forEach((item:any)=>{
            const existe = pro.some(p => p.codigo === item.codigo);
    if (!existe) {
      pro.push(item); // 👉 agrega al array existente
    }
              })
                    this.totalglobal=JSON.parse(dato).inventariototal
         console.log("productos despues", JSON.parse(dato).mensajePeticion)  
  this.productos=[...pro]
  console.log(this.productos)
 }
                    
          
        });
  }
  

}else{
 const llegoAlFinal =
    element.scrollTop + element.clientHeight >= element.scrollHeight - 5;
  if (!this.obtenertodo) return;
  if (this.cargando) return;
  if (!llegoAlFinal) return;
  if (this.pagina >= this.nregistros) return;
    
    if(this.pagina <= this.nregistros){
       this.cargando = true;
       this.pagina++
       console.log("pagina actual",this.pagina)
   const paginaactual=this.pagina+1
    console.log("pagina actual",paginaactual)
        console.log("productos antes",this.productos)
    let pro=this.productos
    this.socketproduct
 
    if(this.productchange!==""){
     this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion:this.productchange ,
          bodega:this.bodegaSeleccionada,
          linea:Number(this.linea),
          grupo:Number(this.grupo)
        })
          

        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {

        
        console.log("productos antes",this.productos)
    

          
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
  return
                    
          
          }
        });
        }
  
  }

}

 
  
}


cargargrupo(e:any){
  if (this.cargando) return;
this.cargando = true;
   console.log("value linea",e)
    
 this.pagina=1
    this.productos=[]
  if(this.obtenertodo){
   this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.productchange ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada,
           linea:Number(this.linea),
          grupo:Number(e)

        })
        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                                 this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }else{
    this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.productchange ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada,
           linea:Number(this.linea),
          grupo:Number(e)

        })
        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato))
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                                 this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }
}
carlinea(e:any){
  if (this.cargando) return;
this.cargando = true;
  console.log("value linea",e)
    
 this.pagina=1
    this.productos=[]
  if(this.obtenertodo){
   this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'INVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.productchange ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada,
           linea:Number(e),
          grupo:Number(this.grupo)

        })
        .subscribe((dato) => {
               this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
       
                        console.log("numerregistro", JSON.parse(dato).registro)
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                                 this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }else{
    this.socketproduct
        .obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'DESCRIPCIONINVENTARIO',
          consulta: 'PRODUCTOS',
          canalserver: 'aws',
          datoCondicion: this.productchange ,
          pagina:this.pagina,
          bodega:this.bodegaSeleccionada,
           linea:Number(e),
          grupo:Number(this.grupo)

        })
        .subscribe((dato) => {
          this.cargando=false
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        console.log("numerregistro", JSON.parse(dato))
                        this.nregistros= JSON.parse(dato).registro
                        this.productos = JSON.parse(dato).mensajePeticion;
                                 this.totalglobal=JSON.parse(dato).inventariototal
          }else{
            this.productos=[]
            this.totalglobal=0
          }
        });
  }
}




}
