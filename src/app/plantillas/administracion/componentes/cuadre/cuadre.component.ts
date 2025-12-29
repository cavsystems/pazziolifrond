import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
interface ventas{
ftBono
: string
ftCheque: string
ftCredito
: string
ftCxc
:string
ftDebito
: string
ftDescuentos
: 
string
ftEfectivo
: 
string
ftExenta
: 
string
ftGravada
: 
string
ftIva
: 
string
totalVentas
: 
string
}

interface recibos{
  TBancos
: 
string,
TCheque
: 
string,
TCredito
: 
string,
TDebito
: 
string,
TDescuentos
: 
string,
TEfectivo
: 
string,
totalRecibos
: string,

}

interface egresos{
  tDescuentos
: 
string
tEgresos
: 
string
}

interface devoluciones{
  totalDescuentos
: 
string,
totalDescuentosCartera
: 
string,
totalDescuentosContado
: 
string,
totalDevolucion
: 
string,
totalDevolucionCartera
: 
string,
totalDevolucionContado
: 
string,
  
}
@Component({
  selector: 'app-cuadre',
  templateUrl: './cuadre.component.html',
  styleUrls: ['./cuadre.component.scss']
})


export class CuadreComponent implements OnInit {


  ventascuadre:ventas={

    ftBono
: "",
ftCheque: "",
ftCredito
: "",
ftCxc
:"",
ftDebito
: "",
ftDescuentos
: 
"",
ftEfectivo
: 
"",
ftExenta
: 
"",
ftGravada
: 
"",
ftIva
: 
"",
totalVentas
: 
"",
  }
  reciboscuadre:recibos={
      TBancos
: 
"0",
TCheque
: 
"0",
TCredito
: 
"0",
TDebito
: 
"0",
TDescuentos
: 
"0",
TEfectivo
: 
"258477000",
totalRecibos
: 
"258477000",
  }

  egresoscuadre:egresos={
tDescuentos
: 
"0",
tEgresos
: 
"0"
  }

   devolucionescuadre:devoluciones={
totalDescuentos
: 
"0",
totalDescuentosCartera
: 
"0",
totalDescuentosContado
: 
"0",
totalDevolucion
: 
"0",
totalDevolucionCartera
: 
"0",
totalDevolucionContado
: 
"0"
   }
   nivel:number=0
  ventabruta:number=0
descuentoventa:number=0
retencionesventa:number=0
gravadasventas:number=0
exentasventas:number=0
ivaventas:number=0
totalventas:number=0
descuentorecibos:number=0
totalrecibos:number=0
totalglobalmetodos:number=0
descuentoegresos:number=0
totalegreso:number=0
chequeventas:number=0
creditoventas:number=0;
debitoventas:number=0;
efectivoventas:number=0;
bancosventas:number=0;
totaldevoluciones:number=0;
efectivoglobal:number=0
targetas:number=0
cxcventas:number=0;
totalcaja:number=0;
netoventa:number=0
otros:number=0;
   almacen:string='0'
   usuario:string='0'
   disabletodo:boolean=true
   almacenes:any=[]
   usuarios:any=[]
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
   constructor( private socketproduct: Socket_producto,private serviciod:serviciodb,  private cdr: ChangeDetectorRef,
    private zone: NgZone
   ) { 

   }
 
   ngOnInit(): void {
      
     this.fechaInicial = new Date();
     this.fechafinal=new Date();
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
                 // this.socketproduct.consultarusuario()
                    console.log("BODEAS ACTULES",JSON.parse(dato).mensajePeticion)
                  this.almacenes = [...JSON.parse(dato).mensajePeticion];
                   this.serviciod.tienesedeselccionada().subscribe((data) => {
          this.zone.run(() => {
          this.almacen = data.codigobodega.toString();
          
          console.log('Actualizando bodega:', this.almacen,data.codigousuario,data.nivel);
          this.cdr.detectChanges();
        });
        let nivel= data.nivel
           if(data.nivel===4 || data.nivel===1){
                this.nivel=data.nivel
               
            this.socketproduct.consultarusuario(data.codigousuario).subscribe(
              (data)=>{
                this.disabletodo=false
                console.log("data usuario",data.datoscliente[0])
                this.usuarios=data.datoscliente
                 this.usuario=data.datoscliente
           
[0].codigo.toString()
if( nivel!==1){
this.almacenes=this.almacenes.filter((datos:any)=>{
                  console.log(datos.codigo===data.codigobodega,data.codigobodega)
                return datos.codigo===Number(this.almacen)
                })
                console.log("almacenfiltrado",this.almacenes,nivel)
}
                
                this.cdr.detectChanges(); // Forzar actualización
              }
            )
            
           }else{
              this.socketproduct.consultarusuario(0).subscribe(
              (data)=>{
                console.log("data usuario",data)
                
                this.usuarios=data.datoscliente
                
              }
            )

           }
        });
                 })
        
   }
 cargaalmacen(valor:string){
  if(this.nivel===4 || this.nivel===1){
     this.socketproduct.consultarusuarioalmacen(Number(valor)).subscribe(
    (data:any)=>{
      const codigousuact=this.usuario
    const usuarioarray=data.usuarios
      this.usuario='0'
      this.usuarios=[...usuarioarray]
   /*   console.log("datos almacen",data)
      const usuarioarray=data.usuarios
   const codigosExistentes = this.usuarios.map((u: any) => u.codigo);
const usuariofiltrado = usuarioarray.filter((u: any) => !codigosExistentes.includes(u.codigo));
        console.log("usuario filtrado",usuariofiltrado)
    const usuario=this.usuarios
    const usuarioactual=this.usuarios.findIndex((item:any)=>{
      return item.codigo ===   Number(codigousuact)
    })
    if(usuarioactual!==-1){

  const usuariofinal=[...usuariofiltrado,usuario[usuarioactual]]
  this.usuarios=[...usuariofinal]
    console.log("usuario final", this.usuarios)
    }else{
       const usuariofinal=[...usuariofiltrado]
    }*/
  
    
   
     

    }
  )
  }
 
 

 }
formatearvariables(){
   this.ventabruta=0
this.descuentoventa=0
this.retencionesventa=0
this.gravadasventas=0
this.exentasventas=0
this.ivaventas=0
this.totalventas=0
this.descuentorecibos=0
this.totalrecibos=0
this.totalglobalmetodos=0
this.descuentoegresos=0
this.totalegreso=0
this.chequeventas=0
this.creditoventas=0;
this.debitoventas=0;
this.efectivoventas=0;
this.bancosventas=0;
this.totaldevoluciones=0;
this.efectivoglobal=0
this.targetas=0
this.cxcventas=0;
this.totalcaja=0;
this.otros=0;
}
 consultarcuadre(){
  this.exentasventas=0     
  this.gravadasventas=0     
  this.ivaventas=0     
  this.cxcventas=0   
  this.descuentoventa=0
     
         this.totalventas=0    
          this.efectivoventas=0   
             this.creditoventas=0      
             this.debitoventas=0     
              this.bancosventas=0   
               this.chequeventas=0
          this.totaldevoluciones=0
              
               this.efectivoglobal=0

               this.targetas=0
               this.otros=0
          
  console.log("fechas",this.fechaInicial,this.fechafinal)
  this.formatearvariables()
   this.socketproduct.consultarTotalesVentasXUsuarioXRangoFechas(Number(this.usuario),Number(this.almacen),`${this.fechaInicial.getFullYear()}-${(Number(this.fechaInicial.getMonth())+1).toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${(Number(this.fechafinal.getMonth())+1).toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(
    (data:any)=>{
      console.log("total de ventas",data. datosaux[0])
      this.exentasventas=Number(data.datosaux[0].ftExenta)
     this.gravadasventas=Number(data.datosaux[0].ftGravada)
     this.ivaventas=Number(data.datosaux[0].ftIva)
     this.cxcventas=Number(data.datosaux[0].ftCxc)
   this.descuentoventa=Number(data.datosaux[0].ftDescuentos)
     
         this.totalventas=Number(data.datosaux[0].totalVentas)
      this.efectivoventas=Number(data.datosaux[0].ftEfectivo)
      this.creditoventas=Number(data.datosaux[0].ftCredito)
      this.debitoventas=Number(data.datosaux[0].ftDebito)
      this.bancosventas=Number(data.datosaux[0].ftBono)
      this.chequeventas=Number(data.datosaux[0].ftCheque)
       
    this.ventascuadre=data.datosaux[0]
        this.socketproduct.consultarTotalesRecibosIngresoXUsuarioXRangoFechas(Number(this.usuario),Number(this.almacen),`${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth()+1).toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth()+1).toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(
         (dat:any)=>{
            console.log("datos recibos",dat)
          this.totalrecibos=Number(dat.datosaux[0].totalRecibos)
          this.descuentorecibos=Number(dat.datosaux[0].TDescuentos)
this.reciboscuadre=dat.datosaux[0]
          this.socketproduct.consultarTotalesRecibosEgresoXUsuarioXRangoFechas(Number(this.usuario),Number(this.almacen),`${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth()+1).toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth()+1).toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(
            (datos:any)=>{
              console.log("datos recibos egresos",datos)
            this.totalegreso= Number(datos.datosaux[0].tEgresos)
             this.descuentoegresos=Number(datos.datosaux[0].tDescuentos)
              this.egresoscuadre=datos.datosaux[0]
             this.socketproduct.consultarTotalesDevolucionesXUsuarioXRangoFechas(Number(this.usuario),Number(this.almacen),`${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth()+1).toString().padStart(2,'0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `,`${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth()+1).toString().padStart(2,'0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(
              (dato:any)=>{
                console.log("datos recibos devoluciones",dato)
                this.totaldevoluciones=Number(datos.datosaux[0].totalDevolucion)
                this.netoventa= this.totalventas-Number(dato.datosaux[0].totalDevolucion)
                console.log(typeof dato.datosaux[0].totalDevolucion,typeof  this.totalventas )
               this.devolucionescuadre=dato.datosaux[0]
               this.efectivoglobal+=(Number(this.ventascuadre.ftEfectivo)+Number(this.reciboscuadre.TEfectivo))-(Number(
                this.egresoscuadre.tEgresos
               )+Number(this.devolucionescuadre.totalDevolucion))

               this.targetas+=Number(this.ventascuadre.ftDebito)+Number(this.ventascuadre.ftCredito)+Number(this.reciboscuadre.TDebito)+Number(this.reciboscuadre.TCredito)
               this.otros+=Number(this.ventascuadre.ftBono)+Number(this.ventascuadre.ftCheque)+Number(this.reciboscuadre.TCheque)
               this.totalglobalmetodos+=  this.efectivoglobal+this.targetas+this.otros+this.cxcventas
               this.totalcaja+=(Number(this.efectivoglobal))
                 console.log(this.ventascuadre.totalVentas,this.reciboscuadre.totalRecibos,this.egresoscuadre.tEgresos,this.devolucionescuadre.totalDevolucion)
              }
             )
            }
          )

          }
         )
    }
   )
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
