import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { numeroALetras } from 'src/app/utils/convertiraletras';
import { Horaforma } from 'src/app/utils/formatearhora';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFingre = (data: any): any => {
  console.log(data);
  let pago: string = '';
  //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.
  console.log(data.tipospagos.data);
  data.tipospagos.data.forEach((data: any) => {
    switch (data.Movimiento) {
      case 'Efectivo':
        pago += data.Movimiento + '  ';
        break;

      case 'T.Credito':
        pago += data.Movimiento + '  ';
        break;

      case 'T.Debito':
        pago += data.Movimiento + '  ';
        break;

      case 'Cheque':
        pago += data.Movimiento + '  ';
        break;

      case 'Banco':
        pago += 'TRANS. BANCARIA' + '(' + data.opcionBanco.nombre + ')';

        break;

      default:
        break;
    }
  });
  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
    return null;
  }

  const tableBody: any[][] = [];
  // Fila de factura
  tableBody.push([
    {
      colSpan: 6,
      alignment: 'left',
      bold: true,
      stack: [
        { text: 'FECHA', bold: true },
        {
          text: data.fechaIngreso.substring(0, data.fechaIngreso.indexOf('T')),
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
      text: `$${data.valor.toLocaleString('de-DE')}`,
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
          text: data.recibidoDe,
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
        { text: 'DIRECCION', bold: true },
        {
          text: data.direccionc,
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
          text: numeroALetras(data.valor),
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
          text: data.concepto,
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
          { text: data.razon },

          { text: data.nit },

          { text: data.direccion },
        ],

        alignment: 'center',
        width: '*',
        margin: [20, 0, 0, 0],
      },

      {
        stack: [{ text: 'Recibo de caja' },
          {text:data.nombreComprobanteRI+data.codigoRI.toString() , fontSize:10}

        ],

        alignment: 'right',
        width: 80,
      },
    ],
  });

  content.push({ text: '\n' });
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
        margin: [0, 10, 10, 10],
      },
    ],
  });
  //Muestra el total de la compra alineado a la derecha.

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
};
