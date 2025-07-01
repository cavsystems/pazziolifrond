import { Component, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';

import { Horaforma } from 'src/app/utils/formatearhora';

import { DatosAlerta, DialogoAlerta } from 'src/app/angular-material/alerta';
import { take } from 'rxjs/operators';
import { error } from 'protractor';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { UntypedFormControl } from '@angular/forms';
import { SocketService } from 'src/services/socket/socket.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
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
  selector: 'Items-inventariounitario',
  template:`
  <div >
  <mat-card>
  <mat-card-header> 
    <div  style="display: flex; justify-content: space-between; width:100%" >
                        <mat-form-field appearance="fill" search  style="flex:0 0 45%;">
                        <mat-label>Ubicacion</mat-label>
                        <input
                            matInput
                            placeholder=""
                            [formControl]="buscarDescripcion"
                            [matAutocomplete]="auto"
                            #trigger="matAutocompleteTrigger"
                            (keyup)="buscarProductos($event, 'descripcion')"
                            id="descripcion"
                            #descripcion
                        />
                        <mat-autocomplete
                            #auto="matAutocomplete"
                            [displayWith]="displayFn"
                            class="mi-autocomplete-panel"
                        >
                            <virtual-scroller
                            #scroll_prods
                            [items]="opcionesFiltradas"
                            style="height: 246px"
                            >
                            <mat-option
                                *ngFor="let option of scroll_prods.viewPortItems"
                                (click)="buscaritem(option)"
                                [value]="option"
                                class="desplegable"
                            >
                                {{ option.ubicacion }}
                            </mat-option>
                            </virtual-scroller>
                        </mat-autocomplete>
                        </mat-form-field>


                        <mat-checkbox  [(ngModel)]="todo" (click)="traertodo()">todo</mat-checkbox>
                    </div>
  </mat-card-header>
  <mat-card-content>
  <div style="max-height:400px; overflow-y: auto;"  (scroll)="onScroll($event)"> 
  <table mat-table [dataSource]="items" class="mat-elevation-z8 col-12">
      <!--- Note that these columns can be defined in any order.
              The actual rendered columns are set as a property on the row definition" -->

      <!-- Position Column -->

      <ng-container matColumnDef="item">
        <th mat-header-cell *matHeaderCellDef>items</th>
        <td mat-cell *matCellDef="let element ; let i=index">{{i+1}}</td>
      </ng-container>

    
  <ng-container matColumnDef="codigo">
        <th mat-header-cell *matHeaderCellDef>codigo</th>
        <td mat-cell *matCellDef="let element">
          {{ element.codigo }}
        </td>
      </ng-container>
      

      <!-- Name Column -->
      <ng-container matColumnDef="descripcion">
        <th mat-header-cell *matHeaderCellDef>descripcion</th>
        <td mat-cell *matCellDef="let element">{{ element.descripcion}}</td>
      </ng-container>

      <!-- Weight Column -->

      <ng-container matColumnDef="cantidad">
        <th mat-header-cell *matHeaderCellDef>cantidad</th>
        <td mat-cell *matCellDef="let element">
          {{ element.cantidad }}
        </td>
      </ng-container>

      <ng-container matColumnDef="ubicacion">
        <th mat-header-cell *matHeaderCellDef>ubicacion</th>
        <td mat-cell *matCellDef="let element">
          {{ element.ubicacion }}
        </td>
      </ng-container>


     

      <ng-container matColumnDef="accionnes">
        <th mat-header-cell *matHeaderCellDef>acciones</th>
        <td mat-cell *matCellDef='let element'>

         <a
                        mat-icon-button
                        color="socondary"
                        
                      >
                        <img
                          src="../../../../../assets/images/delete_button.svg"
                          style=" width: 30px; height: 33px"
                          class="imgicon"
                          (click)="anularitem(element.codigo)"
                        />
                      </a>
        
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
    </div>
  </mat-card-content>
  </mat-card>
  </div> ` ,
  styles:[``],
})
export class Itemsinventariounitario {
    todo:boolean=true;
  public pedido: [] = [];
  public numero: number = 0;
  public otrocorreo: string = '';
  public total_registros = 0;
  public registros_max = 15;
  public pagina: number = 1;
  public descripcio: string = '';
  ubicacion:string='';
  descrip:string='';
  loading: boolean = false;
  opcionesFiltradas: any[] = [];
    @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
    inDescripcion!: MatAutocompleteTrigger;
   buscarDescripcion = new UntypedFormControl('');
   public items = new MatTableDataSource<any>([]);
  cantidadregistros: number = 0;
  displayedColumns: string[] = [
    'item',
    'codigo',
     'descripcion',
    'cantidad',
    'ubicacion',
    'accionnes',
    
  ];

  constructor(
     public dialogRef: MatDialogRef<Itemsinventariounitario>,
     private socketproduct: Socket_producto,
     private socketserviciofactura: FacturaserviceService,
     private servifactura: FacturaserviceService,
     public dialog: MatDialog,
       private socketServices: SocketService,
     @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    console.log('data',this.data.itemsinven)
    this.consultaritemsiventario(this.data.itemsinven);
    this.servifactura.conectar()
  }
 displayFn(_prod: PRODUCTO): string {
    return _prod && _prod.ubicacion ? _prod.ubicacion : '';
  }

  traertodo(){
    if(!this.todo){
      this.pagina=1;
      this.descrip='';
      this.buscarDescripcion.setValue('');
    
      this.consultaritemsiventario(this.data.itemsinven);
    }else{
      this.items.data=[];
      this.cantidadregistros=0;
    }
  }
   consultaritemsiventario(descrip:string){
    this.socketserviciofactura.consultaritems(this.pagina,descrip).pipe(take(1)).subscribe(data=>{
        this.items.data=data.respuesta
     this.cantidadregistros=data.nregistros.suma
    })
   }
   buscaritem(data:any){
  this.ubicacion=this.buscarDescripcion.value.ubicacion;
  this.todo=false;
  this.pagina=1;
 this.socketserviciofactura.consultaritems(this.pagina,this.data.itemsinven,this.ubicacion).pipe(take(1)).subscribe(
    (data:any)=>{
        console.log("datainventario",data)
        this.items.data=data.respuesta
        this.cantidadregistros=data.nregistros.suma
        this.items.data = [...this.items.data]; 
        console.log("items",this.items.data)
    }
 )
   }

   onScroll(event: any) {
    const element = event.target;
    console.log(this.cantidadregistros)
    if ( element.scrollHeight - element.scrollTop === element.clientHeight && this.cantidadregistros > this.items.data.length) {
    
     
      this.pagina++;
  
      this.servifactura.consultaritemsiventario(this.pagina,this.descrip).pipe(take(1)).subscribe(
        (data:any)=>{
            for(let i=0;i<data.respuesta.length;i++){
           this.items.data=this.items.data.filter(datos=>datos.codigo===data.respuesta[i].codigo)
            }

        this.items.data.push(...data.respuesta);
        
          this.items.data = [...this.items.data]; 

        this.loading = true;
        }
      );
    }
  }


  async buscarProductos(key: any, campo: string) {
    console.log("entre a buscarProductos")
    this.servifactura.consultaritemubicacion( this.buscarDescripcion.value).subscribe((data:any)=>{
        console.log("data",data)
        this.opcionesFiltradas= data.respuesta
    })
    /*await this.repuestaproductos(
      'DESCRIPCION',
      this.buscarDescripcion.value,
      true
    );*/
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
         
          //this.totalPagar = 0;
         
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
  anularitem(element:number){
    this.socketserviciofactura.eliminaritemsinventario({codigo:element}).pipe(take(1)).subscribe(
      (data:any)=>{
     
       if(data.response){
        this.pagina=1;
        this.socketserviciofactura.consultaritems(this.pagina,this.data.itemsinven,this.ubicacion).pipe(take(1)).subscribe(
            (data:any)=>{
                console.log("datainventario",data)
                this.items.data=data.respuesta
                this.cantidadregistros=data.nregistros.suma
                this.items.data = [...this.items.data]; 
                console.log("items",this.items.data)
            })
       }
  })
}
  procesarproductos(info: any, estado: boolean, buscartodo: boolean) {
        if (estado) {
            this.opcionesFiltradas  = info.mensajePeticion.map((producto: any) => {
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
         
        }
       
      }

      abrirpanel() {
        if (this.opcionesFiltradas.length > 0) {
       
          this.inDescripcion.openPanel();
        }
      }
}