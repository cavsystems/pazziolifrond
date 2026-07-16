import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from '../tienda/tienda.component';
import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import generarpdf from '../tienda/pdf/pdfpedido';
import generarPdfFacturaPedido from '../tienda/pdf/pdffacturapedido';
import { Horaforma } from 'src/app/utils/formatearhora';
import { generatePDFemail } from '../tienda/pdf/pdf';
import { DialogoAlerta } from 'src/app/angular-material/alerta';
import { take } from 'rxjs/operators';
import { error } from 'protractor';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  public pedido: [] = [];
  public numero: number = 0;
  public otrocorreo: string = '';
  public total_registros = 0;
  public registros_max = 15;
  public pagina: number = 0;
  public descripcio: string = '';
  public esta: string = '';
  public fechaInicio: Date | null = null;
  public fechaFin: Date | null = null;

  public estado = ['PENDIENTE', 'FACTURADO', 'ANULADO', 'TODO'];
  public estado2: string = '';
  displayedColumns: string[] = [
    'codigo',
    'nombrevendedor',
    'estadopedido',
    'razonsocial_clientes',
    'fecha creacion',
    'totalpedido',
    'Codigofactura',
    'Totalfactura',
    'acciones',
  ];

  public empresaConfig: any = {};
  public empresaConfigComprobante: any = {};

  constructor(
    private dialog: MatDialog,
    private sedeselect: serviciodb,
    private router: Router,
    private productser: Socket_producto,
    private route: ActivatedRoute
  ) {
    this.obtenerregistros();
    this.sedeselect.tienesedeselccionada().subscribe((resp: any) => {
      this.empresaConfig = resp?.config || {};
      this.empresaConfigComprobante = resp?.configcomprobante || {};
    });
  }

  private valorEmpresa(campo: string, alternativos: string[] = []): string {
    const enComprobante = this.empresaConfigComprobante?.[campo];
    if (enComprobante !== undefined && enComprobante !== null && enComprobante !== '') {
      return enComprobante;
    }

    const enConfig = this.empresaConfig?.[campo];
    if (enConfig !== undefined && enConfig !== null && enConfig !== '') {
      return enConfig;
    }

    for (const alterno of alternativos) {
      const valor =
        this.empresaConfigComprobante?.[alterno] ?? this.empresaConfig?.[alterno];
      if (valor !== undefined && valor !== null && valor !== '') {
        return valor;
      }
    }

    return '';
  }

  private construirConfigEncabezado() {
    return {
      RAZON_SOCIAL: this.valorEmpresa('RAZON_SOCIAL'),
      NIT: this.valorEmpresa('NIT'),
      DIRECCION: this.valorEmpresa('DIRECCION'),
      TELEFONO: this.valorEmpresa('TELEFONO', ['TELEFONOS', 'TELEFONO_PRINCIPAL']),
      CODIGO_POSTAL: this.valorEmpresa('CODIGO_POSTAL'),
      CORREO: this.valorEmpresa('CORREO', [
        'CORREO_ENVIO_PEDIDO',
        'CORREO_ENVIO_PRINCIPAL',
        'CORREO_ENVIO',
      ]),
      MUNICIPIO: this.valorEmpresa('MUNICIPIO'),
      ETIQUETA_RETEICA: this.valorEmpresa('ETIQUETA_RETEICA') || 'ReteIca',
      ETIQUETA_RETEIVA: this.valorEmpresa('ETIQUETA_RETEIVA') || 'ReteIva',
      ETIQUETA_TCREDITO: this.valorEmpresa('ETIQUETA_TCREDITO') || 'Tarjeta Crédito',
      ETIQUETA_TDEBITO: this.valorEmpresa('ETIQUETA_TDEBITO') || 'Tarjeta Débito',
      TITULO_DOCUMENTO: this.valorEmpresa('TITULO_DOCUMENTO') || 'Factura',
    };
  }

  private obtenerObservacion(valor: any): string {
    if (valor === true || valor === 'true' || valor === undefined || valor === null) {
      return '';
    }
    return valor;
  }

  private formatFecha(date: Date | null): string {
    if (!date) return '';
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  obtenerregistros(busqueda: string = '', estado: string = '') {
    const fi = this.formatFecha(this.fechaInicio);
    const ff = this.formatFecha(this.fechaFin);
    this.productser.obtenernregistros(busqueda, estado, fi, ff).subscribe((data) => {
      
        console.log("numerooooooooooooooooooooooooooooooo registros actuales",data.nregistros.nregistros,data)
       
      if (!data.response) {
        window.location.reload();
      } else {
        console.log("numerooooooooooooooooooooooooooooooo registros actuales",data.nregistros.nregistros,data)
        this.total_registros = data.nregistros.nregistros;
      }
    });
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

      this.cargarPedidos(); // función que obtiene los datos según la página
    });
  }
  comensarbusqueda() {
    this.router.navigateByUrl(`admin/pedido?pagina=1`);
  }
  selecionaritem(item: string) {
    this.estado2 = item;
    this.pagina = 1;
    this.buscarpedido();
  }
  cargarPedidos() {
    const fi = this.formatFecha(this.fechaInicio);
    const ff = this.formatFecha(this.fechaFin);
    this.productser
      .obtenerpedidos_realizados(this.pagina, this.descripcio, this.estado2, fi, ff)
      .subscribe((data) => {
        console.log('pedidos actuales', data.pedidos);
        this.pedido = data.pedidos;
        this.obtenerregistros(this.descripcio, this.estado2);
      });
  }

  buscarpedido() {
    this.pagina = 1;
    const fi = this.formatFecha(this.fechaInicio);
    const ff = this.formatFecha(this.fechaFin);
    this.productser
      .obtenerpedidos_realizados(this.pagina, this.descripcio, this.estado2, fi, ff)
      .subscribe((data) => {
        this.pedido = data.pedidos;
        this.obtenerregistros(this.descripcio, this.estado2);
      });
  }

  aplicarFiltroFecha() {
    this.pagina = 1;
    this.buscarpedido();
  }

  limpiarFechas() {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.pagina = 1;
    this.buscarpedido();
  }
  verdetalles() {
    const dialogref = this.dialog.open(Dialogdetalles, {
      data: this.pedido,
      disableClose: true,
      width: '100%',
    });

    dialogref.afterClosed().subscribe((datos) => {});
  }
  pdf(pedido: any) {
    if (pedido.estadopedido === 'FACTURADO') {
      const dialogref = this.dialog.open(DialogoAlerta, {
        data: {
          boton: 'Pedido',
          boton1: 'Factura',
          mensaje: 'Que desea imprimir?',
          tipo: 'question',
        },
      });

      dialogref.afterClosed().subscribe((dato) => {
        if (dato) {
          this.generarPdfPedido(pedido);
        } else {
          this.productser
            .obtenerfacturapedidos(pedido.comprobante, pedido.codigofactura)
            .subscribe((resultado) => {
              generarPdfFacturaPedido({
                items: resultado.respuesta,
                numerofactura: pedido.codigofactura,
                numerocomprobante: pedido.comprobante,
                numeropedido: pedido.codigo_pedido,
                prefijo: resultado.prefijo,
                config: this.construirConfigEncabezado(),
              });
            });
        }
      });
      return;
    }

    this.generarPdfPedido(pedido);
  }

  private generarPdfPedido(pedido: any) {
    this.productser
      .obteneritemspedido(pedido.codigo_pedido)
      .subscribe((datos) => {


        this.productser.obtenerInfo(
        'terceros', 'pazzioli-pos-3',
        {
          metodo: 'CONSULTAR',
          condicion:'id',
      consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion:pedido.codigotercero,
        
        }
      ).pipe(take(1)).subscribe( async (data)=>{
         console.log("pedidos actulaes pdf",pedido)

             generarpdf({
          cliente: {
            nombre: JSON.parse(data).mensajePeticion[0].razonSocial,
            identificacion:JSON.parse(data).mensajePeticion[0].identificacion,
            email: JSON.parse(data).mensajePeticion[0].email,
            telefonoFijo: JSON.parse(data).mensajePeticion[0].telefonoFijo,
            ciudad:JSON.parse(data).mensajePeticion[0].municipio,
            departamento:JSON.parse(data).mensajePeticion[0].departamento,
            codigotercero:JSON.parse(data).mensajePeticion[0].codigo
            },
          pdfsinprecio:JSON.parse(data).pdfsinprecio,
          numero: pedido.codigo_pedido,
          productos: datos.result,
          fecha_actual: pedido.fecha_creacion,
          horaActual: Horaforma(pedido.hora),
          config: datos.config,
          nombre: pedido.nombrevendedor ?? "",
          observaciones: this.obtenerObservacion(pedido.observacion)
        });
      })
       
    
      });
  }

  enviarcorreo(pedido: any) {
    const horfecha = `${pedido.fecha_creacion} ${Horaforma(pedido.hora)}`;
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
    dialogref.afterClosed().subscribe((datas) => {
      if (datas) {
      

             this.productser
          .obteneritemspedido(pedido.codigo_pedido)
          .subscribe(async (datos) => {

               this.productser.obtenerInfo(
        'terceros', 'pazzioli-pos-3',
        {
          metodo: 'CONSULTAR',
          condicion:'id',
      consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion:pedido.codigotercero,
        
        }
      ).pipe(take(1)).subscribe( async (data)=>{


         console.log("pedidos actulaes pdf",JSON.parse(data),"pkkkkkkkkkkkkkkkkkkkk")
        
          if (datos) {
              const pdf = await generatePDFemail({
               cliente: {
            nombre: JSON.parse(data).mensajePeticion[0].razonSocial,
            identificacion:JSON.parse(data).mensajePeticion[0].identificacion,
            email: JSON.parse(data).mensajePeticion[0].email,
            telefonoFijo: JSON.parse(data).mensajePeticion[0].telefonoFijo,
            ciudad:JSON.parse(data).mensajePeticion[0].municipio,
            departamento:JSON.parse(data).mensajePeticion[0].departamento,
            codigotercero:JSON.parse(data).mensajePeticion[0].codigo
            },
               pdfsinprecio:JSON.parse(data).pdfsinprecio,
                numero: pedido.codigo_pedido,
                productos: datos.result,
                fecha_actual: pedido.fecha_creacion,
                horaActual: Horaforma(pedido.hora),
                config: datos.config,
                nombre: datos.vendedor,
                 observaciones: this.obtenerObservacion(pedido.observacion)
              });

              this.productser
                .enviaremail({
                  idpedido: pedido.codigo_pedido,
                  itemspedido: datos.result,
                  cliente: {
                    nombre: pedido.razonsocial_clientes,
                    identificacion: pedido.identificacion,
                    email: pedido.email,
                    telefonoFijo: pedido.telefonoFijo,
                    direccion: pedido.direccion,
                  },
                  pdf: pdf,
                  email: datas,
                  fecha: horfecha,
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
            }
        })
          
          });
         /*   if (datos) {
              const pdf = await generatePDFemail({
                cliente: {
                  nombre: pedido.razonsocial_clientes,
                  identificacion: pedido.identificacion,
                  email: pedido.email,
                  telefonoFijo: pedido.telefonoFijo,
                },
                numero: pedido.codigo_pedido,
                productos: datos.result,
                fecha_actual: pedido.fecha_creacion,
                horaActual: Horaforma(pedido.hora),
                config: datos.config,
                nombre: datos.vendedor,
              });

              this.productser
                .enviaremail({
                  idpedido: pedido.codigo_pedido,
                  itemspedido: datos.result,
                  cliente: {
                    nombre: pedido.razonsocial_clientes,
                    identificacion: pedido.identificacion,
                    email: pedido.email,
                    telefonoFijo: pedido.telefonoFijo,
                    direccion: pedido.direccion,
                  },
                  pdf: pdf,
                  email: data,
                  fecha: horfecha,
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
            }*/
        
      }
    });
  }
  eliminar_pedido(element: any) {
    let dialogref;
    if (element.estadopedido === 'PENDIENTE') {
      dialogref = this.dialog.open(DialogoAlerta, {
        data: {
          boton: 'Si',
          boton1: 'No',
          mensaje: 'Desea anular  este pedido?',
          tipo: 'question',
        },
      });

      dialogref.afterClosed().subscribe((dato) => {
        if (dato) {
          this.productser
            .anularpedido(
              'ANULADO',
              element.codigo_pedido,
              element.codigousuario
            )
            .subscribe(
              (data) => {
                dialogref = this.dialog.open(DialogoAlerta, {
                  data: {
                    boton: 'Ok',
                    mensaje: data.mensaje,
                    tipo: 'done',
                  },
                });

                dialogref.afterClosed().subscribe((datos) => {
                  this.pagina = 1;
                  this.cargarPedidos();
                });
              },
              (error) => {
                dialogref = this.dialog.open(DialogoAlerta, {
                  data: {
                    boton: 'Ok',
                    mensaje: error.error.mensaje,
                    tipo: 'error',
                  },
                });
              }
            );
        }
      });
    } else {
      dialogref = this.dialog.open(DialogoAlerta, {
        data: {
          icon: 'error',
          boton1: 'Ok',
          mensaje: 'Este pedido no puede ser eliminado ',
          tipo: 'error',
        },
      });
    }
  }
}

@Component({
  selector: 'dialog-detalles',
  templateUrl: 'dialogs/dialog-detalles.html',
})
@HostBinding('container')
export class Dialogdetalles {
  displayedColumns: string[] = ['nombre', 'codigobarra', 'estado'];
  constructor(
    public dialogRef: MatDialogRef<Dialogdetalles>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
