import type {
  TDocumentDefinitions,
  StyleDictionary
} from 'pdfmake/interfaces';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';

(pdfMake as any).vfs = (pdfFonts as any).vfs;

 export const generatePDFemail = async (data: any): Promise<string> => {

  const mostrarPrecio = !data.pdfsinprecio;

  // =========================
  // HEADER TABLA
  // =========================

  const headers: any[] = [
    { text: 'Codigo', style: 'tableHeader' },
    { text: 'Descripción', style: 'tableHeader' },
    { text: 'Referencia', style: 'tableHeader' },
    { text: 'Presentación', style: 'tableHeader' },
    {
      text: 'Cant.',
      style: 'tableHeader',
      alignment: 'center',
    },
  ];

  if (mostrarPrecio) {
    headers.push(
      {
        text: 'Precio',
        style: 'tableHeader',
        alignment: 'right',
      },
      {
        text: 'Total',
        style: 'tableHeader',
        alignment: 'right',
      }
    );
  }

  // =========================
  // BODY
  // =========================

  const bodyRows = data.productos.map((product: any) => {

    const row: any[] = [
      { text: product.codigoContable ?? '', fontSize: 10 },
      { text: product.nombre ?? '', fontSize: 10 },
    { text: product.presentacion ?? '', fontSize: 10 },
             { text: product.referencia ?? '', fontSize: 10 },
      {
        text: String(product.cantidad ?? 0),
        alignment: 'center',
        fontSize: 10,
      },
    ];

    if (mostrarPrecio) {

      row.push(
        {
          text: `$${Number(product.precio || 0).toLocaleString('de-DE')}`,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: `$${(
            (product.cantidad || 0) *
            (product.precio || 0)
          ).toLocaleString('de-DE')}`,
          alignment: 'right',
          fontSize: 10,
        }
      );

    }

    return row;
  });

  const tableBody = [headers, ...bodyRows];

  // =========================
  // TOTAL
  // =========================

 const totalGeneral = data.productos.reduce(
    (sum: number, product: any) =>
      sum + (product.cantidad || 0) * (product.precio || 0),
    0
  );

    const cantidadtotales = data.productos.reduce(
    (sum: number, product: any) =>
      sum + (product.cantidad || 0),
    0
  );


  // =========================
  // CONTENT
  // =========================

  const content: any[] = [];

  content.push({
    stack: [
      {
        text: data.config?.RAZON_SOCIAL || '',
        style: 'header',
      },
      {
        text: data.config?.NIT || '',
        style: 'subheader',
      },
    ],
    alignment: 'center',
  });

  content.push({
    columns: [
      {
        width: '*',
        stack: [
          {
            text: `Cliente: ${data.cliente?.nombre || ''}`,
            style: 'header',
          },
          {
            text: `Identificación: ${data.cliente?.identificacion || ''}`,
            style: 'subheader',
          },
          {
            text: `Email: ${data.cliente?.email || ''}`,
            style: 'subheader',
          },
          {
            text: `Telefono: ${data.cliente?.telefonoFijo || ''}`,
            style: 'subheader',
          },
          {
            text: `Ciudad: ${data.cliente?.ciudad || ''}`,
            style: 'subheader',
          },
          {
            text: `Departamento: ${data.cliente?.departamento || ''}`,
            style: 'subheader',
          },
          {
            text: `Codigo tercero: ${data.cliente?.codigotercero || ''}`,
            style: 'subheader',
          },
        ],
      },
      {
        width: '*',
        alignment: 'right',
        stack: [
          {
            text: `Pedido No. ${data.numero || ''}`,
            style: 'header',
          },
          {
            text: `Fecha: ${data.fecha_actual || ''}`,
            style: 'subheader',
          },
          {
            text: `Hora: ${data.horaActual || ''}`,
            style: 'subheader',
          },
          {
            text: `Vendedor: ${data.nombre || ''}`,
            style: 'subheader',
          },
        ],
      },
    ],
  });

  content.push({ text: '\n' });

  // =========================
  // WIDTHS
  // =========================

  const widths: (number | '*')[] = mostrarPrecio
    ? [50, '*', 70, 70, 40, 70, 80]
    : [50, '*', 70, 70, 40];

  // =========================
  // TABLE
  // =========================

  content.push({
    table: {
      headerRows: 1,
      widths,
      body: tableBody,
    },
    layout: 'lightHorizontalLines',
    margin: [0, 10, 0, 10],
  });

  // =========================
  // TOTAL
  // =========================

  content.push({
    columns: [
      { text: '', width: '*' },
      {
         text:  mostrarPrecio ? `TOTAL: $ ${totalGeneral.toLocaleString('de-DE')}`:`TOTAL:  ${ cantidadtotales}`,
        style: 'total',
        alignment: 'right',
      },
    ],
  });

  // =========================
  // OBSERVACIONES
  // =========================

  content.push({
    stack: [
      {
        text: `Observaciones:`,
        style: 'header',
        margin: [5, 0, 5, 0],
      },
    ],
  });

  content.push({
    stack: [
      {
        text: data.observaciones || '',
        style: 'subheader',
        margin: [5, 0, 5, 0],
      },
    ],
  });

  // =========================
  // STYLES
  // =========================

  const styles: StyleDictionary = {
    header: {
      fontSize: 14,
      bold: true,
    },
    subheader: {
      fontSize: 10,
      margin: [0, 3, 0, 3],
    },
    tableHeader: {
      bold: true,
      fontSize: 10,
      color: 'black',
    },
    total: {
      fontSize: 12,
      bold: true,
    },
  };

  // =========================
  // DOC
  // =========================

  const docDefinition: TDocumentDefinitions = {
    content,
    styles,
    pageSize: 'LETTER',
    pageMargins: [20, 20, 20, 20],
  };

  // =========================
  // RETORNAR BASE64
  // =========================

  return new Promise((resolve) => {

    pdfMake
      .createPdf(docDefinition)
      .getBase64((base64: string) => {

        resolve(base64);

      });

  });

};

