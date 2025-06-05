import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFfa = (data: any): any => {
  console.log(data);
  //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.
  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
    return null;
  }
  let item = data.respuesta[0];
  let contador = 0;
  const tableBody: any[][] = [
    [
      { text: 'Codigo', style: 'tableHeader' },
      { text: 'nombre', style: 'tableHeader' },
      { text: 'fechaEmision', style: 'tableHeader' },
      { text: 'fechaVencimiento', style: 'tableHeader' },
      { text: 'dias', style: 'tableHeader' },
      { text: 'totalFactura', style: 'tableHeader' },
      { text: 'saldo', style: 'tableHeader' },
      { text: 'vendedor', style: 'tableHeader' },
      { text: 'cliente', style: 'tableHeader' },
    ],
  ];
  tableBody.push([
    { text: String(item.codigo), noWrap: false, fontSize: 8 },
    { text: String(item.nombre), noWrap: false, fontSize: 8 },
    { text: String(item.fechaEmision), noWrap: false, fontSize: 8 },
    { text: String(item.fechaVencimiento), noWrap: false, fontSize: 8 },
    { text: String(item.dias), noWrap: false, fontSize: 8 },
    {
      text: String(`$${item.totalFactura.toLocaleString('de-DE')}`),
      noWrap: false,
      fontSize: 8,
    },
    {
      text: String(`$${item.saldo.toLocaleString('de-DE')}`),
      noWrap: false,
      fontSize: 8,
    },
    { text: String(item.vendedor), noWrap: false, fontSize: 8 },
    { text: String(item.cliente), noWrap: false, fontSize: 8 },
  ]);
  data.respuesta.forEach((fact: any) => {
    if (item.cliente !== fact.cliente) {
      // Fila de factura
      tableBody.push([
        { text: String(fact.codigo), noWrap: false, fontSize: 8 },
        { text: String(fact.nombre), noWrap: false, fontSize: 8 },
        { text: String(fact.fechaEmision), noWrap: false, fontSize: 8 },
        { text: String(fact.fechaVencimiento), noWrap: false, fontSize: 8 },
        { text: String(fact.dias), noWrap: false, fontSize: 8 },
        {
          text: String(`$${fact.totalFactura.toLocaleString('de-DE')}`),
          noWrap: false,
          fontSize: 8,
        },
        {
          text: String(`$${fact.saldo.toLocaleString('de-DE')}`),
          noWrap: false,
          fontSize: 8,
        },
        { text: String(fact.vendedor), noWrap: false, fontSize: 8 },
        { text: String(fact.cliente), noWrap: false, fontSize: 8 },
      ]);
      // Fila de resumen
    } else {
      tableBody.push([
        { text: item.cliente, colSpan: 3, alignment: 'left', bold: true },
        {},
        {},
        {},
        { text: 'Total', colSpan: 2 },
        {},
        {}, // vendedor vacío
        {
          text: `$${item.totalSaldoCliente.toLocaleString('de-DE')}`,
          bold: true,
        },

        {}, // cliente vacío
      ]);
    }
  });
  //Se calcula la suma total de todos los productos usando reduce.

  const totalGeneral = data.respuesta.reduce(
    (sum: any, product: any) => sum + product.saldo,
    0
  );
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  const content: any[] = [];
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

  content.push({ text: '\n' });
  //Muestra la tabla de productos con sus cantidades y totales.
  //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.
  content.push({
    columns: [
      {
        width: 'auto',
        table: {
          headerRows: 1,
          widths: [
            'auto',
            'auto',
            'auto',
            'auto',
            'auto',
            '*',
            '*',
            'auto',
            'auto',
          ],
          body: tableBody,
        },
        alignment: 'left',
        layout: 'lightHorizontalLines',
        margin: [0, 10, 10, 10],
      },
    ],
  });
  //Muestra el total de la compra alineado a la derecha.

  content.push({
    columns: [
      { text: '', width: '*' },
      {
        text: `Total saldo: $ ${totalGeneral.toLocaleString('de-DE')}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10],
      },
    ],
  });
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
