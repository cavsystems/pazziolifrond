import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { DatosAlerta, DialogoAlerta } from './alerta';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { UntypedFormControl } from '@angular/forms';
import { formatearFecha } from '../utils/formaterafecha';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { formatearfechasql } from '../utils/formatearfechasql';
import { generatePDFrecibos } from 'src/app/utils/pdfrecibo';
import { take } from 'rxjs/operators';
import { generatePDFrecibosgmail } from '../utils/pdfrecibogmail';

@Component({
  selector: 'Recibo-alerta',
  template: `
    <div
      class="contenedor-alert"
      style="display: flex;justify-content: center;"
    >
      <mat-card style="overflow:auto">
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
          <div
            style="width: 100%;
    min-width: 700px;
    max-height: 200px;
    overflow: auto;"
          >
            <table style="width:100%">
              <thead>
                <tr class="trrecibo">
                  <td>Codigo recibo</td>
                  <td>Cliente</td>
                  <td>Vendedor</td>
                  <td>Fecha creacion</td>
                  <td>Valor recibo</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of recibo" class="trrecibo">
                  <td>{{ item.codigo }}</td>
                  <td>{{ item.razonSocial }}</td>
                  <td>{{ item.nombre }}</td>
                  <td>{{ formatearfechas(item.fecha) }}</td>
                  <td>$ {{ item.Valor.toLocaleString('de-DE') }}</td>
                  <td>
                    <div style="display: flex;">
                      <a
                        mat-icon-button
                        color="socondary"
                        (click)="generarpdfrecibo(item)"
                      >
                        <img
                          src="../../../../../assets/images/imgpdf.svg"
                          style="color: #fe676c; width: 34px; height: 36px"
                          class="imgicon"
                        />
                      </a>

                      <button
                        mat-icon-button
                        style="color: #5db5f2"
                        (click)="enviarcorreo(item)"
                      >
                        <mat-icon>forward_to_inbox</mat-icon>
                      </button>
                    </div>
                  </td>
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

      .trrecibo {
        border: 1px solid #000;
        display: flex;
        width: 100%;
        td {
          justify-content: center;
          display: flex;
          width: 100%;
        }
      }

      .mat-dialog-container {
        overflow-x: hidden;
        overflow-y: auto;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class Recibopago {
  id: string = '';
  letracli: any = null;
  buscarDescripcioncli = new UntypedFormControl('');
  fechaInicial!: Date;
  recibo: any[] = [];
  fechafinal!: Date;
  total_venta_general: number = 0;
  nombreComprobante!: number;
  razonsocial!: string;
  nit!: string;
  direccion!: string;

  cliente: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<Recibopago>,
    private socketproduct: Socket_producto,
    private socketserviciofactura: FacturaserviceService,
    private servifactura: FacturaserviceService,
    public dialog: MatDialog,
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
        this.nombreComprobante = data.nombreComprobanteRI;
        this.razonsocial = data.razonsocial;
        this.nit = data.nit;
        this.direccion = data.direccion;
        console.log(this.recibo);
      });
  }

  generarpdfrecibo(item: any) {
   console.log(item)
    this.socketserviciofactura
   
      .totalrecibo(item.codigotercero)
      .subscribe((data) => {
    
        generatePDFrecibos({
          recibo: item,
          nombreComprobanteRI: this.nombreComprobante,
          saldoactual: data.respuesta[0].suma,
          razonsocial: this.razonsocial,
          nit: this.nit,
          usuario: data.usuario,
          direccion: this.direccion,
        });
      });
    /* generatePDFrecibos({
      recibo: item,
      nombreComprobanteRI: this.nombreComprobante,
    });*/
  }

  enviarcorreo(item: any) {
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
    dialogref.afterClosed().subscribe((data: any) => {
      if (data) {
        this.socketserviciofactura
          .totalrecibo(item.codigotercero)
          .subscribe(async (datos) => {
            const pdf = await generatePDFrecibosgmail({
              recibo: item,
              nombreComprobanteRI: this.nombreComprobante,
              saldoactual: datos.respuesta[0].suma,
              razonsocial: this.razonsocial,
              nit: this.nit,
              usuario: data.usuario,
              direccion: this.direccion,
            });

            this.servifactura
              .enviaremail({
                cliente: item,
                pdf: pdf,
                email: data,
              })
              .subscribe((datos: any) => {
                console.log(datos);
                if (datos.estadoPeticion === 'Done') {
                  const dialogref = this.dialog.open(DialogoAlerta, {
                    data: {
                      boton: 'OK',
                      tipo: 'done',
                      mensaje: 'Correo enviado',
                    },
                    disableClose: true,
                  });
                  dialogref.afterClosed().subscribe((datos) => {});
                  //console.log(datos);
                  //window.location.reload();
                }
              });
          });
      }
    });
  }
  displayFn(cliente: any): string {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }
}
