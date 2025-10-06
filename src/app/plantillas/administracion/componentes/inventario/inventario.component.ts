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
  bodegaSeleccionada:string=''
   displayedColumns: string[] = [
 
    'referencia',
    'descripcion',
    'costo',
    'precio1',
     'precio2',
      'precio3',
   'cantidad1',
     'cantidad2',
      'cantidad3',
       'cantidad4',
        'cantidad5',
         'cantidad6',
          'cantidad7',
           'cantidad8',
            'cantidad9',
             'cantidad10',
    'totalproducto'
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
         this.cdr.detectChanges();
          }
        });
    }

  }
cargabodega(valor: string){
  
 
}

navegarpagina1(){

}

cargarcarteracompleta(){
  console.log(">>> Ejecutando cargarcarteracompleta()");
  this.cliente=""
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
         
  this.productos=[...pro]
  console.log(this.productos)
  return}
                    
          
        });
  }
  
  
  }
}

 
  
}


}
