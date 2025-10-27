import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFfa = (data: any): any => {
    //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.
  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
    return null;
  }
 
  console.log(data.respuesta)
  let contador = 0;
   let item=data.respuesta[0]
  let nombre=data.respuesta[0].cliente
  const tableBody: any[][] = [
    [
      { text: 'Código', style: 'tableHeader' },
      { text: 'Nombre', style: 'tableHeader' },
      { text: 'Fecha emision', style: 'tableHeader' },
      { text: 'Fecha vencimiento', style: 'tableHeader' },
      { text: 'Días', style: 'tableHeader' },
      { text: 'Total factura', style: 'tableHeader' },
      { text: 'Saldo', style: 'tableHeader' },
      { text: 'Vendedor', style: 'tableHeader' },
    
    ],
  ];

// con colspan defino cuatas seldas quiero que ocupe una y segui especificoendo las demas celdas como vacias
     tableBody.push([
      
            { text: `Id:${item.identificacion}`, colSpan: 2,    bold: true, alignment: 'left', fontSize:8 },
        {},
        {},
        { text:item.cliente , colSpan: 1 ,  noWrap: false,  bold: true, alignment: 'left', fontSize: 8 },
        {},
        {
          text: `Tels:${item.telefonoFijo}-${item.celulares}`,
          bold: true, alignment: 'left', fontSize: 8,colSpan: 1 
        },
         {},
         { text: `Ciudad:${item.municipio}`, bold: true, alignment: 'left', fontSize: 8
        },
       
      
      
        
      ]);
  /*tableBody.push([
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
      ]);*/
  data.respuesta.forEach((fact: any, index: number) => {
    console.log(fact.cliente !== nombre)
    if (fact.cliente !== nombre) {

        let clientesaldo=data.respuesta.find((item:any)=> item.cliente===nombre && item.totalSaldoCliente) 
      // Fila de factura
      tableBody.push([
        {text: 'Total', colSpan:5 ,bold: true, alignment: 'left', fontSize: 8 },
        {},
        {},
        { },
        {},
        {}, // vendedor vacío
        {
          text: `$${clientesaldo.totalSaldoCliente.toLocaleString('de-DE')}`,
          bold: true, alignment: 'left', fontSize: 8
        },

        {}, // cliente vacío
      ]);
      

      tableBody.push([
        
        { text: `Id:${data.respuesta[index].identificacion}`, colSpan: 2, alignment: 'left', bold: true , fontSize: 8},
        {},
      {},
        { text:data.respuesta[index].cliente, colSpan: 1 ,  noWrap: false, alignment: 'left', bold: true , fontSize: 8},
        {},
        
        {
          text: `Tels:${data.respuesta[index].telefonoFijo}-${data.respuesta[index].celulares}`,
          bold: true, alignment: 'left', fontSize: 8,colSpan: 1 
        },
     
        {}, // cliente vacío
            { text: `Mun:${data.respuesta[index].municipio}`, bold: true, alignment: 'left', fontSize: 8},
      ]);
      // Fila de resumen

    nombre=fact.cliente
      item = data.respuesta[contador];
      contador++;
    } else {
      contador++;
      if(index!==0){
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
        { text: String(fact.vendedor), noWrap: false, fontSize: 6 },
      
      ]);
      }
     
    }
  });
     tableBody.push([
      {text: 'Total', colSpan:5 ,bold: true, alignment: 'left', fontSize: 8 },
        {},
        {},
        { },
        {},
        {}, // vendedor vacío
    {
      text: `$${item.totalSaldoCliente.toLocaleString('de-DE')}`,
      bold: true,
    },

    {}, // cliente vacío
  ]);
  //Se calcula la suma total de todos los productos usando reduce.

  const totalGeneral = data.respuesta.reduce(
    (sum: any, product: any) => sum + product.saldo,
    0
  );
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  const content: any[] = [];
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.
  content.push({
    stack: [{ text: 'Cartera', fontSize: 20, bold: true }],
    alignment: 'center',
  });

  content.push({ text: '\n' });
  //Muestra la tabla de productos con sus cantidades y totales.
  //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.
  //con auto las columnas toman el ancho necesario según su contenido. 
  //con * la columna toma el espacio restante disponible.
  //y especificando un numero en lugar de auto o * se define un ancho fijo.
content.push({
  columns: [
    {
      width: 'auto',
     
          table: {
            headerRows: 0,
            widths: [
              20,
              'auto',
              'auto',
              100,
            20,
              50,
              '*',
            80,
            
            ],
            body: tableBody,
          },
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
