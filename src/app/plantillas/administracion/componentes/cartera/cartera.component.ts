import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { SocketService } from 'src/services/socket/socket.service';
import { generatePDFfa } from './pdf_cartera/pdf';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Platform } from '@ionic/angular';
import generatePDFfactura from '../tienda/pdf/pdffactura';
import { promise } from 'protractor';
import { take } from 'rxjs/operators';
import { DialogoAlerta } from 'src/app/angular-material/alerta';
import { generatePDFfagm } from './pdf_cartera/pdfgmailcartera';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss'],
})
export class CarteraComponent implements OnInit {
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
  public ciudad:string='';
  public factura = new MatTableDataSource<any>([]);
  public facturatodo: any[] = [];
  public ciudades:string[]=[]
  public codigo: number = 0;
  public codigoComprobante: number = 0;
  public fechaEmision: string = '';
  public fechaVencimiento: string = '';
  public dias: number = 0;
  public totalFactura: number = 0;
  public saldo: number = 0;
  public nivel: number = 0;
  nombre=""
  clientef = {
    codigo: 0,
    saldo: 0 ,
    cliente: '',
  };
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
    'Acciones',
 
   
    
  ];
  
  public totalCartera: number = 0;
  public total_registros: number = 0;
  public obtenertodo: boolean = false;
  pagina!: number;
  constructor(
    private socketproduct: Socket_producto,
    private socketServices: SocketService,
    private servifactura: FacturaserviceService,
    private route: ActivatedRoute,
    private serviouth: AuthService,
       public dialog: MatDialog,
    private router: Router,
     private platform: Platform,
  ) {
    this.traerciudades();
        this.servifactura.conectar()
          
    this.serviouth.obtenernivel().subscribe((data) => {
            this.nivel = data.nivel;
    });
  }
  determinarnivel() {
    if (this.nivel !== 4 || !this.obtenertodo) {
      return false;
    }
    return true;
  }

generarpdfitem(e:any,element:any){
    e.stopPropagation()
    this.servifactura.traeritemsfactura(element).subscribe( async (datos) => {
      console.log("dekforjfi",datos.respuesta,element)
      let productos=datos?.respuesta.map((item:any)=>{
                return{
           cantidad:item.cantidad,
          codigoContable:item.codigoContable,
          nombre:item.descripcion,
          referencia:item.referencia,
          presentacion:item.presentacion,
          precio:item.precio,



        }
      })
      let config=datos.config
      let cliente={
        nombre:element.cliente,
        email:datos.respuesta[0].email,
        identificacion:datos.respuesta[0].identificacion,
        telefonoFijo:datos.respuesta[0].telefonofijo
      }
      let factura={
        fechaEmision:element.fechaEmision,
        horaCreacion:datos.respuesta[0].horacreacion,
        codigo:datos.respuesta[0].codigofactura,
        observaciones:datos.respuesta[0].observaciones
       


      }
      let data={
       
        config,
        factura,
         nombre:element.vendedor,
        prefijo:datos.prefijo




      }

               await generatePDFfactura({...data,productos,cliente})
             
    })

  }

  connectWhatsApp() {
  const appId = '25440666145628329';
  const redirectUri = encodeURIComponent(
    'http://localhost:4200/admin/cartera'
  );

  ///const state = this.generateState(); // seguridad

  const url = `https://www.facebook.com/v19.0/dialog/oauth?` +
    `client_id=${appId}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${"state"}` +
    `&response_type=code` +
    `&scope=whatsapp_business_management,whatsapp_business_messaging`;

  window.open(url, '_blank', 'width=600,height=700');
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

      if (this.obtenertodo && this.clienteSeleccionado.codigo === 0) {
        this.cargarcarteracompleta();
      } else {
        this.servifactura
          .traerfacturas(this.pagina, this.clienteSeleccionado.codigo)
          .subscribe((data) => {
            //  this.obtenertodo = false;
            if (data.respuesta.length > 0) {
              this.pagina = 1;
              this.total_registros = data.nregistros;
              this.factura.data = data.respuesta;
              this.totalCartera = 0;
              this.totalCartera = data.saldo;
            }
          });
      }
    });
  }



  verificaritemsfactura(row:any){
       this.servifactura.traeritemsfactura(row).subscribe((data) => {
     const dialogRef = this.dialog.open(Dialogitemscartera, {
      width: this.platform.is('desktop') ? '60%' : '100%',
      
      data:{
        respuesta:data.respuesta,
        factura:row
      }
     })
    })
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
  //esta funciones me detectaran que filas utilizar
  isRegularRow = (index: number, row: any) => {

    return !row?.isResumen 
    
    &&    !row?.isnombrecliente;

  };
  

mostrarcliente(index: number, row: any){
  if(!row.isnombrecliente){
    console.log( "indefinido",index,row
    )

  }else{
console.log( row.isnombrecliente)

  }
 
  return  row.isnombrecliente
  }

  isResumenRow = (index: number, row: any) => {
  
    return row.isResumen === true  &&    !row.isnombrecliente;
  };

   registronombrecliente = (row: any) => {
    return this.factura.data[row]?.isResumen === true;
  };

  async traerciudades(){
    this.servifactura.traerciudades().subscribe( async (data) => {
      console.log("Todas las facturas back",data)
      data.respuesta.forEach((element:any) => {
        this.ciudades.push( element.municipio)
      });
      

    });
  }


   async generafilaresume(data: any[]):Promise<any[]> {
    console.log("data resumen",data)
    let subtotal=0;
    let grupoActual: string | null = null;
    this.facturatodo = [];
    if (
      this.clientef.codigo !== data[0].codigo ||
      this.clientef.cliente=== data[0].cliente
    ) {
      subtotal = this.clientef.saldo;
    } else {
      subtotal = 0;
    }

    let contador = 0;
   for (let i = 0; i < data.length; i++) {
      let item = data[i];
   
             if (grupoActual === null) {
       this.facturatodo.push(item);

        grupoActual = item.cliente;
        subtotal += item.saldo;
      } else {
        if (grupoActual !== item.cliente) {
       const result: any = await this.servifactura
          .obtenertotalpornombrefactura(grupoActual)
          .toPromise(); // 👈 equivalente a firstValueFrom en RxJS 6

        subtotal = Number(result.respuesta[0]?.sumatotal || 0);

        this.facturatodo.push({
          isResumen: true,
       cliente: grupoActual,
          totalCliente: subtotal,
            isnombrecliente: false
        });

        grupoActual = item.cliente;
        subtotal = item.saldo;
        this.facturatodo.push(item);
          
        } else {
          this.facturatodo.push(item);
          subtotal += item.saldo;
        }
      }
      contador++;
    }
    


    if (grupoActual !== null) {
        const result: any = await this.servifactura
          .obtenertotalpornombrefactura(grupoActual)
          .toPromise(); // 👈 equivalente a firstValueFrom en RxJS 6
   
        subtotal = Number(result.respuesta[0]?.sumatotal || 0);

      this.facturatodo.push({
        isResumen: true,
         cliente: grupoActual,
        totalCliente: subtotal,
            isnombrecliente: false
      });

      this.clientef.codigo = data[contador - 1].codigo;
      this.clientef.cliente = data[contador - 1].codigo;
      this.clientef.saldo = subtotal;
      grupoActual = null;
    }


       let nom=""
    this.facturatodo= this.facturatodo.reduce((acumulador: any[], item: any) => {
  if (item.cliente !== nom) {
    nom = item.cliente;

    // primero agregas una fila de "cliente"
    acumulador.push({
      ...item,
      isnombrecliente: true
    });
  }

  // luego agregas la fila normal
  acumulador.push({
    ...item,
    isnombrecliente: false
  });

  return acumulador;
}, []);

console.log(this.facturatodo)

    return this.facturatodo;
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
    this.router.navigate(['admin/cartera'], {
      queryParams: { pagina: 1 },
    });
    this.servifactura
      .traerfacturas(this.pagina, this.clienteSeleccionado.codigo)
      .subscribe((data) => {
        this.obtenertodo = false;
        if (data.respuesta.length > 0) {
          this.pagina = 1;
          this.total_registros = data.nregistros;
          this.factura.data = data.respuesta;
          this.totalCartera = 0;
          this.totalCartera = data.saldo;
        }
      });
  }
  generarpdf() {
    this.servifactura.facturapdf(this.ciudad).subscribe((data) => {
      console.log("data cliente",data)
      generatePDFfa(data,this.totalCartera);
    });
  }

   generarpdfid() {
    console.log("cliente seleccionado",this.clienteSeleccionado)
    this.servifactura.generarpdfid(this.clienteSeleccionado.codigo,this.ciudad).subscribe((data) => {
      generatePDFfa(data,this.totalCartera);
    });


    
  }

  generarpdfidclienteselect(id:number) {
    this.servifactura. generarpdfid(this.clienteSeleccionado.codigo,this.ciudad).subscribe((data) => {
      generatePDFfa(data,this.totalCartera);
    });


    
  }

  navegarpagina1() {
    if (!this.obtenertodo) {
      this.router.navigate(['admin/cartera'], {
        queryParams: { pagina: 1, back: 1 },
      });
    }
  }
  async cargarconciudad(valor:string='') {
    this.navegarpagina1()
    this.cargarcarteracompletas(valor)
  }
   async cargarcarteracompletas(valor:string='') {
    this.cliente = '';
    this.clientes = [];

    if (this.obtenertodo) {
      let param = this.route.snapshot.queryParamMap.get('back');
      if (param && param === '1') {
        const timeout = setTimeout(() => {
          this.router.navigate(['admin/cartera'], {
            queryParams: { pagina: 1 },
          });
        }, 0);
        clearTimeout(timeout);
      }
      this.servifactura.traertodaslasfacturas(1,this.ciudad).subscribe( async (data) => {
        console.log("Todas las facturas back",data)
        this.clienteSeleccionado = {
         
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
        if (data.respuesta.length > 0) {
             this.total_registros = data.nregistros;
        this.totalCartera = data.saldo;
          
        console.log(this.factura.data)
        this.factura.data = await  this.generafilaresume(data.respuesta)
        }

       ;

        // this.router.navigate(['admin/cartera'], { queryParams: { pagina: 1 } });
      });
    } else {
      if (this.clienteSeleccionado.codigo === 0) {
        this.factura.data = [];
        this.totalCartera = 0;
        this.total_registros = 0;
        this.router.navigate(['admin/cartera'], {
          queryParams: { pagina: 1 },
        });
      }
    }
  }

   async cargarcarteracompleta() {
    this.cliente = '';
    this.clientes = [];

    if (this.obtenertodo) {
      let param = this.route.snapshot.queryParamMap.get('back');
      if (param && param === '1') {
        const timeout = setTimeout(() => {
          this.router.navigate(['admin/cartera'], {
            queryParams: { pagina: 1 },
          });
        }, 0);
        clearTimeout(timeout);
      }
      this.servifactura.traertodaslasfacturas(this.pagina,this.ciudad).subscribe( async (data) => {
        console.log("Todas las facturas back",data)
        this.clienteSeleccionado = {
         
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
        if (data.respuesta.length > 0) {
             this.total_registros = data.nregistros;
        this.totalCartera = data.saldo;
          
        console.log(this.factura.data)
        this.factura.data = await  this.generafilaresume(data.respuesta)
        }

       ;

        // this.router.navigate(['admin/cartera'], { queryParams: { pagina: 1 } });
      });
    } else {
      if (this.clienteSeleccionado.codigo === 0) {
        this.factura.data = [];
        this.totalCartera = 0;
        this.total_registros = 0;
        this.router.navigate(['admin/cartera'], {
          queryParams: { pagina: 1 },
        });
      }
    }
  }



    enviarcorreo(clientec: any=null) {
      if(clientec){
            console.log("cleinte actual seleccionado",clientec)
      const dialogref = this.dialog.open(DialogoAlerta, {
        data: {
          boton: 'Continuar',
          input: true,
          boton1: 'Cancelar',
          mensaje: 'Digite otro correo si lo desea',
          type: 'email',
          inputIcon: 'mail',
          inputText: 'Ingrese correo',
          tipo: 'info',
        },
        disableClose: true,
      });
      dialogref.afterClosed().subscribe( (data1) => {
        if (data1) {
             this.servifactura. generarpdfid(clientec.id ,this.ciudad).subscribe(async (data) => {
              console.log(data)
 const pdf = await generatePDFfagm(data,data.respuesta
[0].totalSaldoCliente);

 this.servifactura.enviaremailfacturapendiente({
                
                    cliente: {
                      nombre:clientec.cliente ,
                      identificacion:clientec.identificacion,
                      email: clientec.email,
                     
                    },
                    pdf: pdf,
                    email: data1,
                    
                  })
                  .pipe(take(1))
                  .subscribe((datos) => {
                    const dialogref = this.dialog.open(DialogoAlerta, {
                      data: {
                        boton: 'OK',
                        tipo: 'done',
                        mensaje: 'Correo enviado',
                      },
                      disableClose: true,
                    });
                    dialogref.afterClosed().subscribe((datos) => {});
                  });
             })

        
                
        
        }
      });
      }else{
        
      }
   
    }
}

@Component({
  selector: 'dialogitemscartera',
  templateUrl: 'dialogs/Dialogitems.html',
  styles: [`.mat-column-Presentacion {
  width: 10%;
  max-width: 10%;
}
  
.mat-column-Cantidad {
  width: 5%;
  max-width: 5%;
}
  
.mat-column-Precioproducto {
  width: 10%;
  max-width: 10%;
}
  
.mat-column-TotalItem  {
  width: 30%;
  max-width: 30%;
}
  
table{

min-width: 700px;}

.mat-dialog-container{
  padding: 0px !important;
}

.containertable{
height:fit-content;
  overflow: auto;
max-width: 800px;
border-radius: 10px;
box-shadow: 5px 0px 10px 5px rgba(0, 0, 0, 0.1);
max-height:450px;

}
`],
})
 export class Dialogitemscartera{
  displayedColumns: string[] = [
    'Item',
    'Descripcion',
    'Presentacion',
    'Cantidad',
    'Precioproducto',
    'TotalItem',

  ];
  constructor(
      public dialogRef: MatDialogRef<any>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private servisocket: Socket_producto,
      private platform: Platform,
      private route: Router
    ) {

          }
  

}
