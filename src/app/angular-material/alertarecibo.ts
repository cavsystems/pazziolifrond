import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatosAlerta } from './alerta';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { UntypedFormControl } from '@angular/forms';
import { formatearFecha } from '../utils/formaterafecha';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { formatearfechasql } from '../utils/formatearfechasql';
@Component({
  selector: 'Recibo-alerta',
  template: `
    <div
      class="contenedor-alert"
      style="display: flex;justify-content: center;"
    >
      <mat-card>
        <mat-card-header>
          <div style="display: flex; flex-direction:row;">
            <div>
              <mat-form-field appearance="fill" search>
                <mat-label style="font-size: 1rem">cliente</mat-label>
                <input
                  matInput
                  #inValor
                  [formControl]="buscarDescripcioncli"
                  [matAutocomplete]="auto"
                  placeholder=""
                  #trigger="matAutocompleteTrigger"
                  (keyup)="buscarcliente($event)"
                  id="valor"
                  type="text"
                />

                <mat-autocomplete
                  #auto="matAutocomplete"
                  [displayWith]="displayFn"
                  class="mi-autocomplete-panel"
                >
                  <virtual-scroller
                    #scroll_prods
                    [items]="cliente"
                    style="height: 246px"
                  >
                    <mat-option
                      *ngFor="let option of scroll_prods.viewPortItems"
                      [value]="option"
                      class="desplegable"
                    >
                      {{ option.razonSocial }}
                    </mat-option>
                  </virtual-scroller>
                </mat-autocomplete>
              </mat-form-field>
            </div>
            <div style="display:flex;">
              <mat-form-field class="example-full-width">
                <mat-label>fecha inicial</mat-label>
                <input
                  matInput
                  [matDatepicker]="picker"
                  [(ngModel)]="fechaInicial"
                />
                <mat-datepicker-toggle matIconSuffix [for]="picker">
                  <mat-icon matDatepickerToggleIcon
                    >keyboard_arrow_down</mat-icon
                  >
                </mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
              </mat-form-field>

              <mat-form-field
                class="example-full-width"
                style="padding: 0 !important;"
              >
                <mat-label>fecha final</mat-label>
                <input
                  matInput
                  [matDatepicker]="pickerfinal"
                  [(ngModel)]="fechafinal"
                />
                <mat-datepicker-toggle matIconSuffix [for]="pickerfinal">
                  <mat-icon matDatepickerToggleIcon
                    >keyboard_arrow_down</mat-icon
                  >
                </mat-datepicker-toggle>
                <mat-datepicker #pickerfinal></mat-datepicker>
              </mat-form-field>
              <div
                style="display: flex; justify-content: center; align-items: center;"
              >
                <button style="max-height: 30px;" (click)="traerrecibo()">
                  buscar
                </button>
              </div>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content style="display:flex;">
          <div style="width:100%">
            <table style="width:100%">
              <thead>
                <tr>
                  <td>Codigo recibo</td>
                  <td>Cliente</td>
                  <td>Vendedor</td>
                  <td>Fecha creacion</td>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of recibo">
                  <td>{{ item.codigo }}</td>
                  <td>{{ item.razonSocial }}</td>
                  <td>{{ item.nombre }}</td>
                  <td>{{ formatearfechas(item.fecha) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      ::ng-deep .mat-form-field-infix {
        display: flex;
        padding: 0 !important;
      }

      ::ng-deep .example-full-width {
        div {
          padding: 0 !important;
        }
      }

      tr {
        border: 1px solid #000;
        display: flex;
        width: 100%;
        td {
          justify-content: center;
          display: flex;
          width: 100%;
        }
      }
    `,
  ],
})
export class Recibopago {
  id: string = '';
  letracli: any = null;
  buscarDescripcioncli = new UntypedFormControl('');
  fechaInicial!: Date;
  recibo: any[] = [];
  fechafinal!: Date;
  total_venta_general: number = 0;
  cliente: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<Recibopago>,
    private socketproduct: Socket_producto,
    private socketserviciofactura: FacturaserviceService,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>
  ) {
    //this.total_venta_general = data.reduce((i, item) => (i += item.total), 0);
  }
  buscarcliente(event: any) {
    if (this.buscarDescripcioncli.value === '') {
      this.cliente = [];
    } else {
      this.socketproduct
        .obtenerInfo('terceros', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'nombres',
          consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion: this.buscarDescripcioncli.value,
        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
            console.log(JSON.parse(dato).mensajePeticion);
            this.cliente = JSON.parse(dato).mensajePeticion;
          }
        });
    }
  }
  formatearfechas(data: string) {
    return formatearfechasql(data);
  }
  seleccionar(option: any) {
    this.letracli = option;
  }
  traerrecibo() {
    let fechafinal = '';
    let fechainicial = '';

    if (this.fechafinal) {
      fechafinal = formatearFecha(this.fechafinal);
    }
    if (this.fechaInicial) {
      fechainicial = formatearFecha(this.fechaInicial);
    }
    console.log('entro aqui');
    this.socketserviciofactura
      .traerrecibos(
        fechainicial,
        fechafinal,
        this.buscarDescripcioncli.value.razonSocial
      )
      .subscribe((data) => {
        console.log(data);
        this.recibo = data.respuesta;
        console.log(this.recibo);
      });
  }
  displayFn(cliente: any): string {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }
}
