import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFaux = (data: any,totalCartera:number,clienteSeleccionado:any, dataempresa:any): any => {
    console.log("Cliente seleccionado producto tablaapdf",data,totalCartera)
    //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.
  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) {
    alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
    return null;
  }
 

  const tableBody: any[][] = [
    [
      { text: 'Documento', style: 'tableHeader' },
      { text: 'Fecha', style: 'tableHeader' },
      { text: 'Debito', style: 'tableHeader' },
      { text: 'Credito', style: 'tableHeader' },
      { text: 'Saldo', style: 'tableHeader' },
      
    
    ],
  ];

 
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
  data.forEach((fact: any, index: number) => {
  
    
   
   
             tableBody.push([
        { text: String(fact.documento), noWrap: false, fontSize: 8 },
        
        { text: String(fact.Fechadocumento), noWrap: false, fontSize: 8 },
      
        {
          text: String(`$${fact.debito.toLocaleString('de-DE')}`),
          noWrap: false,
          fontSize: 8,
        },
         {
          text: String(`$${fact.credito.toLocaleString('de-DE')}`),
          noWrap: false,
          fontSize: 8,
        },
        {
          text: String(`$${fact.saldoactual.toLocaleString('de-DE')}`),
          noWrap: false,
          fontSize: 8,
        },
     
      
      ]);

     
    
  });
   
  //Se calcula la suma total de todos los productos usando reduce.


  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  const content: any[] = [];
  //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
  //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.
  /*content.push({
    stack: [{ text: '', fontSize: 20, bold: true }],
    alignment: 'center',
  });*/
  content.push({
    columns: [
      { text: 'Movimientos cliente', width: '*', alignment:"center", fontSize: 12,bold: true, margin: [0, 0, 0, 0], },
    

      

      
    ],
  });
    content.push({
    columns: [
   
      { text: dataempresa, width: '*', alignment:"center", fontSize: 12,bold: true, margin: [0, 0, 0, 10], }

      

      
    ],
  });


   content.push({
    columns: [
    {
      text: [
        { text: 'Cliente: ', bold: true },
    
        { text: clienteSeleccionado.nombre , fontSize: 10}
      ],
      width: '*',
      alignment: 'left'
    }
      
   
    ],
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
      width: '*',
     
          table: {
            headerRows: 0,
            widths: [
            '*',
              '*',
            '*',
              '*',
            '*',
             
            
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
        text: `Total saldo: $ ${totalCartera.toLocaleString('de-DE')}`,
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
      fontSize: 8,
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
