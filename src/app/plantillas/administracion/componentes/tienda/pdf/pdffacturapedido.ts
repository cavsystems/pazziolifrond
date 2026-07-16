import type {
  TDocumentDefinitions,
  StyleDictionary
} from 'pdfmake/interfaces';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';

(pdfMake as any).vfs = (pdfFonts as any).vfs;

const formatearFecha = (fecha: any) => {
  if (!fecha) return '';

  const soloFecha = String(fecha).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (soloFecha) {
    const [, anio, mes, dia] = soloFecha;
    return `${dia}/${mes}/${anio}`;
  }

  const date = new Date(fecha);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('es-CO');
};

const formatearHora = (fecha: any) => {
  if (!fecha) return '';
  const date = new Date(fecha);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('es-CO');
};

const generarPdfFacturaPedido = async (data: any) => {
  const nuevaVentana = window.open('', '_blank');

  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente');
    return null;
  }

  const items: any[] = data.items || [];
  const primero = items[0] || {};
  const fechaVencimiento = primero.fechaVencimiento ?? primero.fechadeVencimiento;

  // =========================
  // TABLA INFORMACION DEL ADQUIRIENTE
  // =========================

  const infoBody = [
    [
      { text: 'Informacion del Adquiriente', style: 'tableHeader', colSpan: 2 },
      {},
      { text: 'Fecha y Hora Emision', style: 'tableHeader' },
      { text: 'Fecha Vencimiento', style: 'tableHeader' },
    ],
    [
      { text: 'Nombre:', style: 'campo' },
      { text: primero.nombretercero || '', style: 'valor' },
      { text: formatearFecha(primero.fechaCreacion), style: 'valor', alignment: 'center' },
      { text: formatearFecha(fechaVencimiento), style: 'valor', alignment: 'center' },
    ],
    [
      { text: 'Contacto:', style: 'campo' },
      {
        text: [primero.telefono, primero.celular].filter(Boolean).join(' / '),
        style: 'valor',
      },
      { text: formatearHora(primero.fechaCreacion), style: 'valor', alignment: 'center' },
      { text: '', style: 'valor' },
    ],
    [
      { text: 'Correo:', style: 'campo' },
      { text: primero.correo || '', style: 'valor' },
      { text: '', style: 'valor' },
      { text: '', style: 'valor' },
    ],
    [
      { text: 'Factura:', style: 'campo' },
      {
        text: `${primero.prefijocomprobante || ''}${data.numerofactura || ''}`,
        style: 'valor',
      },
      { text: 'VENDEDOR', style: 'tableHeader', colSpan: 2, alignment: 'center' },
      {},
    ],
    [
      { text: 'Comprobante:', style: 'campo' },
      { text: `${data.numerocomprobante || ''}`, style: 'valor' },
      { text: primero.nombrevendedor || '', style: 'valor', colSpan: 2, alignment: 'center' },
      {},
    ],
  ];

  // =========================
  // TABLA PRODUCTOS
  // =========================

  const productosHeaders = [
    { text: '#', style: 'tableHeader', alignment: 'center' },
    { text: 'Codigo', style: 'tableHeader' },
    { text: 'Descripción', style: 'tableHeader' },
    { text: 'Cant.', style: 'tableHeader', alignment: 'center' },
    { text: 'Precio U.', style: 'tableHeader', alignment: 'right' },
    { text: 'Iva', style: 'tableHeader', alignment: 'center' },
    { text: 'Descuento', style: 'tableHeader', alignment: 'right' },
    { text: 'Total', style: 'tableHeader', alignment: 'right' },
  ];

  const productosBody = items.map((item: any, index: number) => {
    const cantidad = Number(item.cantidadvendida || 0);
    const precio = Number(item.preciovendido || 0);
    const descuento = Number(item.descuentoproducto || 0);
    const totalItem = cantidad * precio - descuento;

    return [
      { text: String(index + 1), alignment: 'center', fontSize: 9 },
      { text: item.codigoproducto ?? '', fontSize: 9 },
      { text: item.descripcionproducto || '', fontSize: 9 },
      { text: cantidad.toString(), alignment: 'center', fontSize: 9 },
      { text: `$${precio.toLocaleString('de-DE')}`, alignment: 'right', fontSize: 9 },
      { text: `${Number(item.tasaiva || 0)}%`, alignment: 'center', fontSize: 9 },
      { text: `$${descuento.toLocaleString('de-DE')}`, alignment: 'right', fontSize: 9 },
      { text: `$${totalItem.toLocaleString('de-DE')}`, alignment: 'right', fontSize: 9 },
    ];
  });

  const productosTableBody = [productosHeaders, ...productosBody];

  // =========================
  // TOTALES
  // =========================

  const subtotal = items.reduce((sum: number, item: any) => {
    const base = Number(item.cantidadvendida || 0) * Number(item.preciovendido || 0);
    const descuento = Number(item.descuentoproducto || 0);
    return sum + (base - descuento);
  }, 0);

  const totalDescuento = items.reduce(
    (sum: number, item: any) => sum + Number(item.descuentoproducto || 0),
    0
  );

  const totalIva = items.reduce((sum: number, item: any) => {
    const base = Number(item.cantidadvendida || 0) * Number(item.preciovendido || 0);
    return sum + base * (Number(item.tasaiva || 0) / 100);
  }, 0);

  const totalRetefuente = items.reduce(
    (sum: number, item: any) => sum + Number(item.retefuente || 0),
    0
  );

  const totalReteica = items.reduce(
    (sum: number, item: any) => sum + Number(item.reteica || 0),
    0
  );

  const totalReteiva = items.reduce(
    (sum: number, item: any) => sum + Number(item.reteiva || 0),
    0
  );

  const totalExenta = Number(primero.totalexenta || 0);
  const totalGravada = Number(primero.totalgravada || 0);

  const totalRetenciones = totalRetefuente + totalReteica + totalReteiva;

  const totalFactura = subtotal - totalRetenciones;

  const totalesBody = [
    ['Subtotal', `$${subtotal.toLocaleString('de-DE')}`],
    ['Descuento', `$${totalDescuento.toLocaleString('de-DE')}`],
    ['Base Exenta', `$${totalExenta.toLocaleString('de-DE')}`],
    ['Base Gravada', `$${totalGravada.toLocaleString('de-DE')}`],
    ['Iva', `$${totalIva.toLocaleString('de-DE')}`],
    ['ReteFuente', `$${totalRetefuente.toLocaleString('de-DE')}`],
    ['ReteIca', `$${totalReteica.toLocaleString('de-DE')}`],
    ['ReteIva', `$${totalReteiva.toLocaleString('de-DE')}`],
    [
      { text: 'Total Factura', style: 'campo', bold: true },
      { text: `$${totalFactura.toLocaleString('de-DE')}`, style: 'valor', bold: true },
    ],
  ];

  // =========================
  // FORMA DE PAGO
  // =========================

  const formasPago = [
    { label: 'Efectivo', valor: primero.efectivo },
    { label: 'Tarjeta Crédito', valor: primero.targetacredito },
    { label: 'Tarjeta Débito', valor: primero.targetadebito },
    { label: 'Cheque', valor: primero.cheque },
    { label: 'Bono', valor: primero.bono },
    { label: 'CXC', valor: primero.cxc },
  ].filter((forma) => Number(forma.valor) > 0);

  const formaPagoTexto = formasPago.length
    ? formasPago.map((f) => f.label).join(' / ')
    : '';

  // =========================
  // CONTENT
  // =========================

  const content: any[] = [];

  content.push({
    stack: [
      { text: data.config?.RAZON_SOCIAL || '', style: 'header' },
      { text: data.config?.NIT || '', style: 'subheader' },
    ],
    alignment: 'center',
  });

  content.push({ text: '\n' });

  content.push({
    table: {
      widths: [70, '*', 100, 100],
      body: infoBody,
    },
  });

  content.push({ text: '\n' });

  content.push({
    table: {
      widths: ['*'],
      body: [
        [{ text: `Forma de pago: ${formaPagoTexto}`, style: 'campo' }],
      ],
    },
  });

  content.push({ text: '\n' });

  content.push({
    table: {
      headerRows: 1,
      widths: [20, 50, '*', 40, 60, 30, 60, 70],
      body: productosTableBody,
    },
  });

  content.push({ text: '\n' });

  content.push({
    columns: [
      {
        width: '*',
        stack: [
          { text: 'Observaciones:', style: 'campo' },
          { text: primero.observaciones || '', style: 'valor' },
        ],
      },
      {
        width: 220,
        table: {
          widths: ['*', 100],
          body: totalesBody,
        },
      },
    ],
  });

  content.push({ text: '\n\n' });

  content.push({
    columns: [
      {
        width: '*',
        stack: [
          { text: '_________________________', alignment: 'center' },
          { text: 'FIRMA AUTORIZA', alignment: 'center', style: 'subheader' },
        ],
      },
      {
        width: '*',
        stack: [
          { text: '_________________________', alignment: 'center' },
          { text: 'NOMBRE / C.C.-NIT. No', alignment: 'center', style: 'subheader' },
        ],
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
      fontSize: 9,
      color: 'black',
      fillColor: '#eeeeee',
    },
    campo: {
      bold: true,
      fontSize: 9,
    },
    valor: {
      fontSize: 9,
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

  pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => {
    const url = URL.createObjectURL(blob);
    nuevaVentana.location.href = url;
  });

  return new Promise((resolve) => {
    pdfMake.createPdf(docDefinition).getBase64((base64: string) => {
      resolve(base64);
    });
  });
};

export default generarPdfFacturaPedido;
