import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { SocketService } from 'src/services/socket/socket.service';
import { debounceTime, filter, take } from 'rxjs/operators';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { DatosAlerta, DialogoAlerta } from 'src/app/angular-material/alerta';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Itemsinventario } from 'src/app/angular-material/alertaritemsinventario';

export interface PRODUCTO {
  numero: number;
  id: string;
  descripcion: string;
  codigo: string;
  codigoContable: string;
  referencia: string;
  cantidad: number;
  precio: number;
  total: number;
  producto: any;
  codigobarra: string;
  tasaiva: string;
  presentacion: string;
  cantidaddisponible: number;
  [key: string]: any;
  ubicacion: string;
}

@Component({
  selector: 'app-inventario-fisico',
  templateUrl: './inventario-fisico.component.html',
  styleUrls: ['./inventario-fisico.component.scss']
})

export class InventarioFisicoComponent implements OnInit {

  @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
  inDescripcion!: MatAutocompleteTrigger;
  @ViewChild('descripcion') descripcion!: ElementRef;
  public Productos = new MatTableDataSource<any>([]);
  productinico: PRODUCTO[] = [];
  productosMostrar: PRODUCTO[] = [];
  buscarDescripcion = new UntypedFormControl('');
  loader: boolean = true;
  opcionesFiltradas: any[] = [];
  productoActual: PRODUCTO = {
      numero: 0,
      id: '_vacio',
      descripcion: 'Seleccione producto',
      codigo: '000',
      codigoContable: '000',
      referencia: '000',
      codigobarra: '0000',
      cantidad: 0,
      precio: 0,
      total: 0,
      producto: {},
      tasaiva: '',
      presentacion: '',
      cantidaddisponible: 0,
      ubicacion:'',
    };
  cantidadproducto: string = '';
  cantidadactual: number = 0;
  cantidad: number = 0;
  precio: number = 0;
  codigo: String = '';
  referencia: String = '';
  productos: PRODUCTO[] = [];
  
  ubicacion:string='';

  displayedColumns: string[] = [
    'codigo',
    
    'codigoContable',
    'descripcion',
    'cantidad',
    'ubicacion',
  ];
  public cantidadTotalRegistros:Number=0;
  public cantidadTotalUnidadesContadas:Number=0;
  codigoitemseled: number = 0;

  constructor(
    private socketServices: SocketService,
    private socketproduct: Socket_producto,
    private socketfacturaservi:FacturaserviceService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  displayFn(_prod: PRODUCTO): string {
    return _prod && _prod.descripcion ? _prod.descripcion : '';
  }

  async repuestaproductos(
      condicion: string = '',
      datoCondicion: string | undefined | number,
      buscartodo: boolean = false
    ): Promise<void> {
      console.log("entre a repuestaproductos")
      return new Promise((resolve, reject) => {
        this.socketServices.escucha = this.socketproduct.obtenerInfo(
          'aws',
          'pazzioli-pos-3',
          {
            metodo: 'CONSULTAR',
            condicion,
            consulta: 'productos',
            datoCondicion,
            sede: localStorage.getItem('sede'),
          }
        );
        //this.socketServices.consultarTercero(this.sedeSeleccionada.po.canalsocket, '', '', this.sedeSeleccionada.usuario.usuario);
        this.socketServices.escucha
          .pipe(take(1))
          .subscribe(async (info: any): Promise<any> => {
            this.loader = false;
            //this.totalPagar = 0;
            this.productosMostrar.forEach((producto) => {
              //this.totalPagar += producto.total;
            });
            info = JSON.parse(info);
  
            switch (info.tipoConsulta) {
              case 'PRODUCTO':
                if (info.estadoPeticion === 'SUCCESS') {
                  this.procesarproductos(info, true, buscartodo);
                  resolve();
                } else {
                }
                break;
              case 'TERCERO':
                if (info.estadoPeticion === 'SUCCESS') {
                }
                break;
              case 'PEDIDO':
                if (info.estadoPeticion === 'SUCCESS') {
                }
                break;
              default:
                break;
            }
          });
      });
    }

  async buscarProductos(key: any, campo: string) {
    console.log("entre a buscarProductos")
    await this.repuestaproductos(
      'DESCRIPCION',
      this.buscarDescripcion.value,
      true
    );
  }

  elegirCantidad(_prod: any) {
    if (typeof _prod == 'object') {
      if (this.buscarDescripcion.value) {
        //this.shoping_card1 = true;
        this.productoActual = { numero: null, ..._prod };
        //this.precio = this.productoActual.precio;
        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        this.codigo = this.productoActual.codigo;
        this.referencia = this.productoActual.referencia;
        this.cantidadactual =
        this.productoActual['producto'][this.cantidadproducto];
        document.getElementById('cantidad')?.focus();
      } else if (this.productos.length > 0) {
        this.productoActual = this.productos[0];
        //this.precio = this.productoActual.precio;
        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        document.getElementById('cantidad')?.focus();
      } else {
        //this.inCodigo.nativeElem<ent.focus();
      }
    }
  }
  async adicionarItem(item: any, cantidadItem:number, ubicacionItem: string) {
    this.productoActual.cantidad=cantidadItem;
    this.productoActual.ubicacion=ubicacionItem;
    console.log("producto actual",this.productoActual)
    this.socketfacturaservi.insertaritemsinventario(this.productoActual).subscribe(
      data=>{
        if(data.response){
          this.Productos.data.push(this.productoActual);
          this.Productos.data = [...this.Productos.data]; 
        
          console.log(this.Productos.data);
          this.opcionesFiltradas = [];
          this.buscarDescripcion.setValue('');
          this.cantidad=0;
          this.cantidadTotalRegistros=this.Productos.data.length;
          this.cantidadTotalUnidadesContadas=this.Productos.data.reduce((sum:any,data:any) => sum+data.cantidad,0)
        }
      }
    )
  
  }

  procesarproductos(info: any, estado: boolean, buscartodo: boolean) {
      if (estado) {
        this.productos = info.mensajePeticion.map((producto: any) => {
          return <PRODUCTO>{
            id: producto.codigo,
            descripcion: producto.descripcion,
            codigo: producto.codigo,
            codigoContable: producto.codigocontable,
            referencia: producto.referencia,
            precio: producto.precio,
            codigobarra: producto.codigoBarra,
            total: 0,
            producto: producto,
            tasaiva: producto.tasaIva,
            presentacion: producto.presentacion,
            cantidaddisponible: producto.cantidad,
          };
        });
        this.productinico = this.productos;
        this.opcionesFiltradas = this.productos;
  
        if (buscartodo === true) {
          this.abrirpanel();
        }
      } else {
        const data: DatosAlerta = {
          titulo: 'ERROR',
          mensaje: 'No se encontraron productos',
          boton: 'OK',
          tipo: 'error',
          input: false,
        };
        //this.openDialogAlerta(data);
        this.loader = false;
      }
      this.loader = false;
    }
    consultarinventario(){
      this.dialog.open(Itemsinventario,{
        width: '100%',
        height: '100vw',
   
        maxHeight: '90vh',
      })

    }
    abrirpanel() {
    if (this.opcionesFiltradas.length > 0) {
      this.codigoitemseled = 0;
      this.inDescripcion.openPanel();
    }
  }
}
