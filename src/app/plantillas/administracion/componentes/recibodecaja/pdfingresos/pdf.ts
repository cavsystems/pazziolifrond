import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { numeroALetras } from 'src/app/utils/convertiraletras';
import { Horaforma } from 'src/app/utils/formatearhora';

//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
(pdfMake as any).vfs = pdfFonts;

export const generatePDFingre = async (data: any): Promise<any> => {
    let pago: string = '';
    let datamovimiento:any[] = []
    
    data.movimiento.forEach((element: any) => {
      
         data.comprobante.forEach((element2: any) => {
          const nombreencontrado=datamovimiento.find((item) => item.nombre === element.Movimiento);
  
      if(!nombreencontrado){
        if(element2.nombre.includes(element.Movimiento.toUpperCase().replace(' ', ''))){
           datamovimiento.push({nombre:element.Movimiento,valorpuc: Number(element2.valor),valor:Math.abs(Number(element.valor))})
        }
        if((element2.nombre==="CUENTA_TD" || element2.nombre==="CUENTA_TC") && (element.Movimiento==="T.Debito" || element.Movimiento==="T.Credito")){
          datamovimiento.push({nombre:element.Movimiento,valorpuc: Number(element2.valor),valor:Math.abs(Number(element.valor))})
        }
        

      }
   
    })
    })
    datamovimiento.push({nombre:"Clientes",valorpuc:13050501,valor:data.valor})
    data.movimiento.push({Movimiento:"Clientes",valor:data.valor})
    //  datamovimiento.sort((a, b) => a.valorpuc - b.valorpuc);
    console.log("movimiento deduccioddfedre", datamovimiento)
    if( data.movimiento.length!== datamovimiento.length){
      datamovimiento=[]
    }
 
  //Se crea el contenido de la tabla, con:
  //Una fila de encabezado (títulos).
  //Una fila por cada producto en el array recibido.
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
  const tableBody3: any[][] = [];
  const tablebody2: any[][] = [
    [
      { text: 'Codigo puc', style: 'tableHeader', colSpan: 2 },
      { text: '', style: 'tableHeader' },
      { text: 'CUENTA', style: 'tableHeader', colSpan: 2 },
      { text: '', style: 'tableHeader' },
      { text: 'DEBITO', style: 'tableHeader', colSpan: 1 },
      { text: 'CREDITO', style: 'tableHeader', colSpan: 1 },

      { text: 'FIRMASELLO', style: 'tableHeader', colSpan: 3 },

      { text: '', style: 'tableHeader' },
    ],
  ];
  
  tablebody2.push([
    {
      
      text: data.movimiento.map((item: any) => {
        const valorpuc= datamovimiento.find((element) => element.nombre === item.Movimiento)?.valorpuc || '';
             console.log("movimiento deduccioddfedre valorpuc", datamovimiento  , !valorpuc)
       
   return`${valorpuc}`;
        
     
        }).join('\n'),
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
        lineHeight: 1.1,
  minHeight: 60
    },
    {
      text:'\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
       lineHeight: 1.1,
  minHeight: 60
    },
    {
      text:  data.movimiento.map((item: any) => {
        const valorpuc= datamovimiento.find((element) => element.nombre === item.Movimiento)?.nombre || '';
       
  return  valorpuc.toUpperCase().replace(" ","")=== "RETEIVA" ?  "Averias": valorpuc.toUpperCase().replace(" ","")=== "RETEICA"  ? "Fletes": `${valorpuc}`;
        
      
        
        }).join('\n'),
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
        lineHeight: 1.1,
  minHeight: 60
    },
    {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
     lineHeight: 1.1,
  minHeight: 60
    },
    {
   text: data.movimiento.map((item: any) => {
        const valorpuc= datamovimiento.find((element) => element.nombre === item.Movimiento)?.valor || '';
           const valorcreditos= datamovimiento.find((element) => element.nombre === item.Movimiento) || '';
      if(valorcreditos.nombre!=="Clientes"){
       return `${valorpuc.toLocaleString('de-DE')}`;
      }
        return '';
        }).join('\n'),
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
        lineHeight: 1.1,
  minHeight: 60
    },
    {
     text: data.movimiento.map((item: any) => {
        const valorpuc= datamovimiento.find((element) => element.nombre === item.Movimiento)?.valor || '';
           const valorcreditos= datamovimiento.find((element) => element.nombre === item.Movimiento) || '';
      if(valorcreditos.nombre=="Clientes"){
       return `${valorpuc.toLocaleString('de-DE')}`;
      }
       return ''; 
        }).join('\n'),
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
  minHeight: 60
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
  colSpan: 5,
  border: [true, true, true, true],
   columnGap: 10, // espacio entre columnas
  columns: [
    {
      width: 'auto',
      text: 'OBSERVACIÓN:',
      bold: true
    },
    {
      width: '*',
         text: `\t\t`+data.observacion // tu variable con el texto
    }
 
  ]
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
      text: 'ELABORADO POR:' + '  ' + data.usuario + '(' + data.vendedor + ')',
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
          text: data.fechaIngreso.substring(0, data.fechaIngreso.indexOf('T')),
          margin: [30, 0, 0, 0],
          fontSize: 12,
        },
      ],
    }, // columna 0
    {},
    {},
    {},
    {}, // columnas 1-4 (vacías para colSpan)
    {},
    {
      text: `VALOR:$${data.valor.toLocaleString('de-DE')}`,
        fontSize: 12,
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
            data.recibidoDe +
            '  ' +
            data.direccionc +
            '  ' +
            data.identificacion,
          margin: [50, 0, 0, 0],
          fontSize: 12,
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
          fontSize: 12,
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
          fontSize: 12,
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
