import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { take } from "rxjs/operators";
import { Socket_producto } from "src/services/socket/socket.producto.service.ts.service";
import { SocketService } from "src/services/socket/socket.service";

@Component({
  selector: 'dialogo-alerta',
  template: `
    <div class="contenedor-alert">
   
      <div class="row">
         <div class="col-12  row" >
         <div class="col-12"><h1>{{data.descripcion}}</h1></div>
             <div class="col-12"  style='display: flex
;
    flex-wrap: wrap;'>

    
             <span style="flex:1">Precio: {{this.precio}}</span>
                  <span style="flex:1">Cantidad Disponible: {{data.cantidaddisponible}}</span>
                    <mat-form-field appearance="fill" class="classformbodega w100  claseselectmodal" >
  <mat-label>Lista precios</mat-label>
  <select matNativeControl  [(ngModel)]="this.lista"   (change)="establecerproductprecio(lista.toString())">
  
    <option  *ngFor="let listprecios of listaprecios" [value]="listprecios">{{listprecios}}</option>
    
  </select>
</mat-form-field>
             </div>
         </div>
        <div class="col-12 col-md-12  col-sm-12 col-lg-6">
          <mat-form-field appearance="fill" rounded>
            <mat-label>Precio</mat-label>
            <textarea
              matInput
              type="text"
              id="Valor"
             [disabled]="modificarPrecio===1"
              [(ngModel)]=this.precio
              
            ></textarea>
      
          </mat-form-field>
        </div>

         <div class="col-12 col-md-12 col-sm-12  col-lg-6">
          <mat-form-field appearance="fill" rounded>
            <mat-label>Cantidad</mat-label>
            <textarea
              matInput
              type="text"
              id="Valor"
           
               [(ngModel)]=this.cantidad
            ></textarea>
          
          </mat-form-field>
        </div>
      </div>


      <div style="width:100%; display:flex;  justify-content:space-between; ">
      <button  (click)="onNoClick()"  mat-button
          color="basic">
      Actualizar
      </button>

        <button   mat-button
          color="basic"
          [mat-dialog-close]="false" >
       cancelar
      </button>
      </div>
   
    </div>
  `,
  styles:[`
    @media(max-width:420px){
    span{
       display: block !important;   
    flex:0 0 100% !important ;
    }
    }
    ::ng-deep .claseselectmodal{
    flex:1 !important;
    }
::ng-deep .claseselectmodal .mat-form-field-wrapper {
  padding: 0 !important;
}

    `]
})
export class DialogoAlertaitemspedido{
 precio:number=0
 cantidad:number=0
 lista:number=1
  modificarPrecio:number=0
  listaprecios:string[]=[]
  codigo:number=0
  
  constructor(
    public dialogRef: MatDialogRef<DialogoAlertaitemspedido>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private socketproduct: Socket_producto,
    private  socketServices: SocketService
  ) {
    this.precio=data.precio;
   this.cantidad=data.cantidad
   this.modificarPrecio=data.modificarPrecio
   this.listaprecios=data.listasprecios
   this.codigo=data.codigo

  }

establecerproductprecio(lis:string){
  if(!this.modificarPrecio){
this.socketServices.escucha = this.socketproduct.obtenerInfo(
        'aws',
        'pazzioli-pos-3',
        {
          metodo: 'CONSULTAR',
          condicion: "CODIGO-EQUAL",
          consulta:'productos',
             datoCondicion: Number(this.codigo),
          precio:lis,
          sede: localStorage.getItem('sede'),
        }
      );
this.socketServices.escucha .pipe(take(1)).subscribe((info)=>{
console.log("info actual traido",)
 this.precio=JSON.parse(info).mensajePeticion[0].precio
})
  }


}
    onNoClick(): void {
    this.dialogRef.close({
    precio: Number(this.precio),
    cantidad: this.cantidad

  })

    
  }

}