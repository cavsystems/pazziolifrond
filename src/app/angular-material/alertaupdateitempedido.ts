import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

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
             <span style="flex:0 0 50%">Precio: {{this.precio}}</span>
                  <span style="flex:0 0 50%">Cantidad Disponible: {{data.cantidaddisponible}}</span>
             </div>
         </div>
        <div class="col-12 col-md-12  col-sm-12 col-lg-6">
          <mat-form-field appearance="fill" rounded>
            <mat-label>Precio</mat-label>
            <textarea
              matInput
              type="text"
              id="Valor"
             [disabled]="modificarPrecio===0"
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
      Actulizar
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
    
    `]
})
export class DialogoAlertaitemspedido{
 precio:number=0
 cantidad:number=0
  modificarPrecio:number=0
  
  constructor(
    public dialogRef: MatDialogRef<DialogoAlertaitemspedido>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.precio=data.precio;
   this.cantidad=data.cantidad
   this.modificarPrecio=data.modificarPrecio

  }


    onNoClick(): void {
    this.dialogRef.close({
    precio: Number(this.precio),
    cantidad: this.cantidad

  })

    
  }

}