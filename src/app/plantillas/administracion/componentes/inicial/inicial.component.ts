import { Component, OnInit } from '@angular/core';
import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { AuthService } from 'src/services/auth/auth.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { debounceTime, filter, take } from 'rxjs/operators';
import { SocketService } from 'src/services/socket/socket.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { log } from 'console';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  id_cliente_store: string = '';
  loader: boolean = true;
  almacen: string = '';
  basedatosactual: string = '';
  configuracion!: any;
  nombrevendedor: String = '';
  identificacion: String = '';
  codigoVendedor: Number = 0;

  public datoPedidosSemanaPtotal:any[]=[]; public datoPedidosSemanaPCantidad:any[]=[]; public topProductosMasPedidos: any[]=[];
  public TPedidosVsTRecibosI:any[]=[];
  public barChartLabelsPtotal: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];// EJE X
  public barChartLabelsPCantidad: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];// EJE X
  public barChartDataPtotal: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabelsPtotal,
    datasets: [
      {
        data: [],
        label: 'Total $',
        backgroundColor: '#9DD904'
      }
    ]
  };// EJE Y

  public barChartDataPCantidad: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabelsPCantidad,
    datasets: [
      {
        data: [],
        label: 'Cantidad und',
        borderColor: '#9DD904',
        backgroundColor: '#9DD904'
        /*fill: false,
        tension: 0.4,
        pointBackgroundColor: '#3f51b5'*/
      }
    ]
  };// EJE Y

  public barChartOptionsPtotal: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
    }
  };

  public barChartOptionsPCantidad: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
    }
  };

  public barChartType: 'bar' = 'bar';
  public barChartTypeLine: 'bar' = 'bar';
  chartTypeL: 'line' = 'line';

  getColorByIndex(index: number): 'primary' | 'accent' | 'warn' | undefined {
    switch (index) {
      case 0: return 'warn';     // Más destacado
      case 1: return 'accent';
      case 2: return 'primary';
      default: return undefined; // Usa color por defecto de Angular Material
    }
  }

  public totalPedidosMes = 0;public mesActualNombre: string = '';

  // grafico linea
  public labels = this.TPedidosVsTRecibosI.map(d => `Semana ${d.semana}`);
  public pedidosData = this.TPedidosVsTRecibosI.map(d => d.totalPedidosSemana);
  public ingresosData = this.TPedidosVsTRecibosI.map(d => d.totalRecibosSemana);
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], // puedes adaptarlo según tus datos reales
    datasets: [
      {
        data: this.pedidosData,
        label: 'Total Pedidos',
        fill: false,
        tension: 0.3,
        borderColor: '#5DB5F2',
        backgroundColor: '#5DB5F2',
        pointBackgroundColor: '#5DB5F2',
        pointBorderColor: '#5DB5F2',
      },
      {
        data: this.ingresosData,
        label: 'Total Recaudo',
        fill: false,
        tension: 0.3,
        borderColor: '#9dD904',
        backgroundColor: '#9dD904',
        pointBackgroundColor: '#9dD904',
        pointBorderColor: '#9dD904',
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };
  // ****************
  constructor(
    private socketservidbs: serviciodb,
    private socketServices: SocketService,
    private serviauth:AuthService,
    private socketproduct: Socket_producto,
    private cdr: ChangeDetectorRef,
  ) {}
  
  ngOnInit(): void {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const fechaHoy = new Date();
    this.mesActualNombre = `${meses[fechaHoy.getMonth()]} ${fechaHoy.getFullYear()}`;
    this.serviauth.mode.value='side'
    this.seleccionardb();
    
  }
seleccionardb() {
    this.socketservidbs.tienesedeselccionada().subscribe((datos) => {
      if (datos.response) {
        this.loader = true;
        //take para obtener un unico valor del observable y no mantener la suscribcion activa
        this.iniciarprograma();
        this.socketproduct
          .obteneralmacen()
          .pipe(take(1))
          .subscribe((datos) => {
            this.almacen = datos.almacen;
            this.configuracion = datos.config;
            this.identificacion = datos.identificacion;
            this.nombrevendedor = datos.nombre;
           
            console.log(datos)
            this.cargarDatosTotalPedidosPorSemana(datos.codigoVendedor);
            this.cargarDatosCantidadPedidosPorSemana(datos.codigoVendedor);
            this.cargarTopProductosMasPedidos(datos.codigoVendedor,5);
            this.cargarTotalPedidosMesVendedor(datos.codigoVendedor);
            this.cargarTotalPedidosVsTRecibosIMes(datos.codigoVendedor);
          });
      } else {
      }
    });
  }

  iniciarprograma() {
    if (
      !localStorage.getItem('pedido') ||
      localStorage.getItem('pedido') === null
    ) {
      this.loader = false;
      this.respuestacliente();
    } else {
      this.loader = false;
      /*this.productosMostrar = JSON.parse(
        localStorage.getItem('pedido') || '{nombre:""}'
      );

      let itemsPedidos = this.productosMostrar.map((producto) => {
        this.totalPagar += producto.total;
      });*/
      this.respuestacliente();
    }
  }

  respuestacliente() {
    this.socketServices.buscarclientes().subscribe((datos) => {
      if (datos.datos && datos.datos.razonSocial) {
        this.id_cliente_store = datos.datos._id;
        
      }
      this.loader = false;
    });
  }

  cargarDatosTotalPedidosPorSemana(codigoVendedor: Number){
    console.log(codigoVendedor);
    this.socketproduct.cargarPedidosSemana(codigoVendedor).subscribe((data) => {
      console.log(data);
      if(!data.response){
        //window.location.reload();
      }else{
       
        data.pedidosSemana.forEach((datos:any) => {
          
          this.datoPedidosSemanaPtotal.push(datos.total_Pedidos_Dia);
        });
        console.log("arraypedidos",this.datoPedidosSemanaPtotal)
        this.barChartDataPtotal.datasets[0].data=this.datoPedidosSemanaPtotal;
        this.barChartDataPtotal = { ...this.barChartDataPtotal};
        this.cdr.detectChanges();
      }
      console.log(this.barChartDataPtotal)
    });
  }

  cargarDatosCantidadPedidosPorSemana(codigoVendedor: Number){
    console.log(codigoVendedor);
    this.socketproduct.cargarPedidosSemana(codigoVendedor).subscribe((data) => {
      console.log(data);
      if(!data.response){
        //window.location.reload();
      }else{
       
        data.pedidosSemana.forEach((datos:any) => {
          
          this.datoPedidosSemanaPCantidad.push(datos.cantidad_pedidos);
        });
        console.log("arraypedidos",this.datoPedidosSemanaPCantidad)
        this.barChartDataPCantidad.datasets[0].data=this.datoPedidosSemanaPCantidad;
        this.barChartDataPCantidad = { ...this.barChartDataPCantidad};
        this.cdr.detectChanges();
      }
      console.log(this.barChartDataPCantidad)
    });
  }
  
  cargarTopProductosMasPedidos(codigoVendedor:Number,top:Number){
    //topProductosMasPedidos
    console.log(codigoVendedor);
    this.socketproduct.cargarTopProductosSemana(codigoVendedor,top).subscribe((data) => {
      console.log(data);
      if(!data.response){

      }else{
        data.TopProductosSemana.forEach((datos:any,i:number) => {
          this.topProductosMasPedidos.push(
            {
              indice:i,
              descripcionProducto: datos.descripcion_producto,
              cantidadProducto: datos.total_pedida
            }
          );
        });
      }
      console.log(this.topProductosMasPedidos);
    });
  }

  cargarTotalPedidosMesVendedor(codigoVendedor:Number){
    console.log(codigoVendedor);
    this.socketproduct.cargarTotalPedidosMesVendedor(codigoVendedor).subscribe((data) => {
      console.log(data);
      if(!data.response){

      }else{
        this.totalPedidosMes=data.cantidadTotalPedidosMes[0].total_pedidos_mes;
      }
      console.log(this.totalPedidosMes);
    });
  }

  cargarTotalPedidosVsTRecibosIMes(codigoVendedor: Number) {
    console.log(codigoVendedor);

    this.socketproduct.cargarTotalPedidosVsTRecibosIMes(codigoVendedor).subscribe((data) => {
      console.log(data);

      // Limpiar antes de volver a llenar (evita duplicados si se recarga)
      this.TPedidosVsTRecibosI = [];

      if (data.response) {
        data.tPedidosVsTRecibosISemas.forEach((datos: any) => {
          this.TPedidosVsTRecibosI.push({
            semana: datos.semana,
            totalPedidosSemana: datos.totalPedidosSemana,
            totalRecibosSemana: datos.totalRecibosSemana,
          });
        });

        // ✅ Actualizar el gráfico aquí mismo
        const labels = this.TPedidosVsTRecibosI.map(d => `Semana ${d.semana}`);
        const pedidosData = this.TPedidosVsTRecibosI.map(d => d.totalPedidosSemana);
        const ingresosData = this.TPedidosVsTRecibosI.map(d => d.totalRecibosSemana);

        this.lineChartData = {
          labels,
          datasets: [
            {
              data: pedidosData,
              label: 'Total Pedidos',
              fill: false,
              tension: 0.3,
              borderColor: '#2e86de',
              backgroundColor: '#2e86de',
              pointBackgroundColor: '#2e86de',
              pointBorderColor: '#2e86de',
            },
            {
              data: ingresosData,
              label: 'Total Recaudo',
              fill: false,
              tension: 0.3,
              borderColor: '#27ae60',
              backgroundColor: '#27ae60',
              pointBackgroundColor: '#27ae60',
              pointBorderColor: '#27ae60',
            }
          ]
        };
      }
      console.log(this.TPedidosVsTRecibosI);
    });
  }
}
