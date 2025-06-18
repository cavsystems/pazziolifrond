import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { numeroALetras } from 'src/app/utils/convertiraletras';
import { Horaforma } from 'src/app/utils/formatearhora';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFrecibos = async (data: any): Promise<any> => {
  console.log(data);
  let pago: string = '';
  //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.

  if (data.recibo.efectivo > 0) {
    pago += 'Efectivo' + '  ';
  }
  if (data.recibo.cheque > 0) {
    pago += 'Chaque' + ' ';
  }
  if (data.recibo.banco > 0) {
    pago += 'Trasnferencia bancaria' + ' ';
  }

  if (data.recibo.credito > 0) {
    pago += 'Credito' + ' ';
  }

  if (data.recibo.debito > 0) {
    pago += 'Debito' + ' ';
  }

  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
    return null;
  }

  const tableBody: any[][] = [];
  const tableBody3: any[][] = [];
  const tablebody2: any[][] = [
    [
      { text: 'Codigo puc', style: 'tableHeader', colSpan: 2 },
      { text: '', style: 'tableHeader' },
      { text: 'CUENTA', style: 'tableHeader', colSpan: 2 },
      { text: '', style: 'tableHeader' },
      { text: 'CREDITO', style: 'tableHeader', colSpan: 1 },
      { text: 'DEBITO', style: 'tableHeader', colSpan: 1 },

      { text: 'FIRMASELLO', style: 'tableHeader', colSpan: 3 },

      { text: '', style: 'tableHeader' },
    ],
  ];

  tablebody2.push([
    {
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
    {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
    {
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
    {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
    {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
    {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },

    {
      table: {
        body: [
          [
            {
              stack: [
                {
                  text: '\n\n\n\n\n\n' + '________________________',
                  bold: true,
                },
                { text: 'c.c.-NIT. No' },
              ],
              margin: [0, 0, 0, 0],
              verticalAlignment: 'bottom',
            },
          ],
        ],
      },
      layout: 'noBorders',
      colSpan: 3,
      border: [true, false, true, true],
      alignment: 'left',
      height: 100,
      verticalAlignment: 'bottom',
      lineHeight: 1.2,
      // altura fija para la celda (en puntos)
      minHeight: 100,
    },

    {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100, // altura fija para la celda (en puntos)
      minHeight: 100,
    },
  ]);
  tablebody2.push([
    {
      text: 'OBSERVACION:',
      colSpan: 5,
      border: [true, true, true, true],
    },
    {},
    {},
    {},
    {},
    {
      text: 'SALDO TOTAL ACTUAL:' + data.saldoactual.toLocaleString('de-DE'),
      colSpan: 4,
      border: [true, true, true, true],
    },
    {},
    {},
    {},
  ]);

  tablebody2.push([
    {
      text:
        'ELABORADO POR:' + '  ' + data.usuario + '(' + data.recibo.nombre + ')',
      colSpan: 9,
      minHeight: 60,
      border: [true, true, true, true],
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  // Fila de factura
  tableBody.push([
    {
      colSpan: 6,
      alignment: 'left',
      bold: true,
      stack: [
        { text: 'FECHA', bold: true },
        {
          text: data.recibo.fecha.substring(0, data.recibo.fecha.indexOf('T')),
          margin: [30, 0, 0, 0],
          fontSize: 8,
        },
      ],
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {
      text: `VALOR:$${data.recibo.Valor.toLocaleString('de-DE')}`,
      colSpan: 3,
      alignment: 'right',
    }, // columna 5
    {}, // columna 6 (vacía para colSpan)
    {},

    // cliente vacío
  ]);

  tableBody.push([
    {
      colSpan: 9,
      alignment: 'left',
      bold: true,

      stack: [
        { text: 'RECIBO DE', bold: true },
        {
          text:
            data.recibo.razonSocial +
            '  ' +
            data.recibo.direccion +
            '  ' +
            data.nit,
          margin: [50, 0, 0, 0],
          fontSize: 8,
        },
      ],
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {}, // columna 5
    {}, // columna 6 (vacía para colSpan)
    {},

    // cliente vacío
  ]);

  tableBody.push([
    {
      colSpan: 9,
      alignment: 'left',
      bold: true,

      stack: [
        { text: 'SUMA DE', bold: true },
        {
          text: numeroALetras(data.recibo.Valor),
          margin: [50, 0, 0, 0],
          fontSize: 8,
        },
      ],
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {}, // columna 5
    {}, // columna 6 (vacía para colSpan)
    {},

    // cliente vacío
  ]);

  tableBody.push([
    {
      colSpan: 9,
      alignment: 'left',
      bold: true,
      stack: [
        { text: 'POR CONCEPTO DE', bold: true },
        {
          text: data.recibo.concepto,
          margin: [50, 0, 0, 0],
          fontSize: 8,
        },
      ],
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {}, // columna 5
    {}, // columna 6 (vacía para colSpan)
    {},

    // cliente vacío
  ]);

  tableBody.push([
    {
      stack: [
        { text: 'FORMA DE PAGO', bold: true },
        {
          text: pago,
        },
      ],

      colSpan: 9,
      alignment: 'left',
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {}, // columna 5
    {}, // columna 6 (vacía para colSpan)
    {},

    // cliente vacío
  ]);

  //Se calcula la suma total de todos los productos usando reduce.

  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  const content: any[] = [];
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

  content.push({
    columns: [
      {
        stack: [
          { text: data.razonsocial },

          { text: data.nit },

          { text: data.direccion },
        ],

        alignment: 'center',
        width: '*',
        margin: [20, 0, 0, 0],
      },

      {
        stack: [
          { text: 'Recibo de caja' },
          {
            text: data.nombreComprobanteRI + data.recibo.codigo.toString(),
            fontSize: 10,
          },
        ],

        alignment: 'right',
        width: 80,
      },
    ],
  });

  //Muestra la tabla de productos con sus cantidades y totales.
  //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.
  content.push({
    columns: [
      {
        width: '*',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: tableBody,
        },
        alignment: 'left',
        layout: {
          hLineColor: function (i: number, node: any) {
            return '#aaa';
          },
          vLineColor: function (i: number, node: any) {
            return '#aaa';
          },
        },
        margin: [0, 10, 10, 0],
      },
    ],
  });
  content.push({
    columns: [
      {
        width: '*',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: tablebody2,
        },
        alignment: 'left',
        layout: {
          hLineColor: function (i: number, node: any) {
            return '#aaa';
          },
          vLineColor: function (i: number, node: any) {
            return '#aaa';
          },
        },
        margin: [0, 0, 10, 0],
      },
    ],
  });

  //Muestra el total de la compra alineado a la derecha.
  content.push({ text: '\n' });
  //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.
  const styles = {
    header: {
      fontSize: 5,
      bold: true,
    },
    subheader: {
      fontSize: 12,
      margin: [0, 5, 0, 5],
    },
    tableHeader: {
      bold: true,
      fontSize: 9,
      color: 'black',
    },
    total: {
      fontSize: 12,
      bold: true,
    },
  };
  //docDefinition es el objeto completo que define el PDF a generar.

  const docDefinition: any = {
    content,
    styles,
  };
  //Genera el PDF y lo abre en una nueva pestaña del navegador.
  pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => {
    const url = URL.createObjectURL(blob);
    nuevaVentana.location.href = url;
  });

  function getPdfBase64(docDefinition: any): Promise<string> {
    return new Promise((resolve) => {
      pdfMake.createPdf(docDefinition).getBase64((base64: string) => {
        resolve(base64);
      });
    });
  }
  return await getPdfBase64(docDefinition);
};
