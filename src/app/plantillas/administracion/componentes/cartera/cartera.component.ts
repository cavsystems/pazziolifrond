import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { FacturaserviceService } from 'src/services/facturaservice/facturaservice.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { SocketService } from 'src/services/socket/socket.service';
import { generatePDFfa } from './pdf_cartera/pdf';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss'],
})
export class CarteraComponent implements OnInit {
  cliente: string = '';
  clientes: any[] = [];
  clienteSeleccionado = {
    nombre: 'Seleccione un cliente',
    identificacion: '',
    email: '',
    celulares: '',
    direccion: '',
    telefonoFijo: '',
    codigo: 0,
    imagen: null,
    ciudad: '',
  };

  public factura = new MatTableDataSource<any>([]);
  public facturatodo: any[] = [];
  public codigo: number = 0;
  public codigoComprobante: number = 0;
  public fechaEmision: string = '';
  public fechaVencimiento: string = '';
  public dias: number = 0;
  public totalFactura: number = 0;
  public saldo: number = 0;
  public nivel: number = 0;
  clientef = {
    codigo: 0,
    saldo: 0,
    nombre: '',
  };
  displayedColumns: string[] = [
    'codigo',
    'codigoComprobante',
    'cliente',
    'fechaEmision',
    'fechaVencimiento',
    'dias',
    'totalFactura',
    'saldo',
    'estadoVencimiento',
  ];

  public totalCartera: number = 0;
  public total_registros: number = 0;
  public obtenertodo: boolean = false;
  pagina!: number;
  constructor(
    private socketproduct: Socket_producto,
    private socketServices: SocketService,
    private servifactura: FacturaserviceService,
    private route: ActivatedRoute,
    private serviouth: AuthService,
    private router: Router
  ) {
    this.serviouth.obtenernivel().subscribe((data) => {
      console.log(data);
      this.nivel = data.nivel;
    });
  }
  determinarnivel() {
    if (this.nivel !== 4 || !this.obtenertodo) {
      return false;
    }
    return true;
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const pagina = Number(params['pagina']) || 0;
      this.pagina = pagina;

      if (this.pagina <= 0) {
        this.pagina = 1;
      }
      if (this.pagina > this.total_registros) {
        if (this.total_registros === 0) {
          this.pagina = 1;
        } else {
          this.pagina = this.total_registros;
        }
      }

      if (this.obtenertodo && this.clienteSeleccionado.codigo === 0) {
        this.cargarcarteracompleta();
      } else {
        this.servifactura
          .traerfacturas(this.pagina, this.clienteSeleccionado.codigo)
          .subscribe((data) => {
            //  this.obtenertodo = false;
            if (data.respuesta.length > 0) {
              this.pagina = 1;
              this.total_registros = data.nregistros;
              this.factura.data = data.respuesta;
              this.totalCartera = 0;
              this.totalCartera = data.saldo;
            }
          });
      }
    });
  }
  autocompletarinputclient() {
    if (this.cliente === '') {
      this.clientes = [];
    } else {
      this.socketproduct
        .obtenerInfo('terceros', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion: 'nombres',
          consulta: 'TERCEROS',
          canalserver: 'terceros',
          datoCondicion: this.cliente,
        })
        .subscribe((dato) => {
          if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
            console.log(JSON.parse(dato).mensajePeticion);
            this.clientes = JSON.parse(dato).mensajePeticion;
          }
        });
    }
  }
  //esta funciones me detectaran que filas utilizar
  isRegularRow = (row: any) => {
    return !this.factura.data[row]?.isResumen;
  };

  isResumenRow = (row: any) => {
    return this.factura.data[row]?.isResumen === true;
  };

  generafilaresume(data: any[]): any[] {
    let subtotal;
    let grupoActual: string | null = null;
    this.facturatodo = [];
    if (
      this.clientef.codigo !== data[0].codigo ||
      this.clientef.nombre === data[0].cliente
    ) {
      subtotal = this.clientef.saldo;
    } else {
      subtotal = 0;
    }

    let contador = 0;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];

      if (grupoActual === null) {
        this.facturatodo.push(item);

        grupoActual = item.cliente;
        subtotal += item.saldo;
      } else {
        if (grupoActual !== item.cliente) {
          this.facturatodo.push({
            isResumen: true,
            nombre: grupoActual,
            totalCliente: subtotal,
          });
          grupoActual = item.cliente;

          subtotal = 0;
          subtotal += item.saldo;
          this.facturatodo.push(item);
        } else {
          this.facturatodo.push(item);
          subtotal += item.saldo;
        }
      }
      contador++;
    }

    if (grupoActual !== null) {
      this.facturatodo.push({
        isResumen: true,
        nombre: grupoActual,
        totalCliente: subtotal,
      });

      this.clientef.codigo = data[contador - 1].codigo;
      this.clientef.nombre = data[contador - 1].codigo;
      this.clientef.saldo = subtotal;
      grupoActual = null;
    }

    return this.facturatodo;
  }

  seleccionarCliente(cliente: any) {
    this.clienteSeleccionado.nombre = cliente.razonSocial;
    this.clienteSeleccionado.identificacion = cliente.identificacion;
    this.clienteSeleccionado.email = cliente.email;
    this.clienteSeleccionado.celulares = cliente.celulares;
    this.clienteSeleccionado.direccion = cliente.direccion;
    this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
    this.clienteSeleccionado.codigo = cliente.codigo;
    this.clienteSeleccionado.imagen = cliente.imagen || null;
    this.clienteSeleccionado.ciudad = cliente.municipio;
    this.clientes = [];
    this.router.navigate(['admin/cartera'], {
      queryParams: { pagina: 1 },
    });
    this.servifactura
      .traerfacturas(this.pagina, this.clienteSeleccionado.codigo)
      .subscribe((data) => {
        this.obtenertodo = false;
        if (data.respuesta.length > 0) {
          this.pagina = 1;
          this.total_registros = data.nregistros;
          this.factura.data = data.respuesta;
          this.totalCartera = 0;
          this.totalCartera = data.saldo;
        }
      });
  }
  generarpdf() {
    this.servifactura.facturapdf().subscribe((data) => {
      generatePDFfa(data);
    });
  }
  navegarpagina1() {
    if (!this.obtenertodo) {
      this.router.navigate(['admin/cartera'], {
        queryParams: { pagina: 1, back: 1 },
      });
    }
  }
  cargarcarteracompleta() {
    this.cliente = '';
    this.clientes = [];

    if (this.obtenertodo) {
      let param = this.route.snapshot.queryParamMap.get('back');
      if (param && param === '1') {
        const timeout = setTimeout(() => {
          this.router.navigate(['admin/cartera'], {
            queryParams: { pagina: 1 },
          });
        }, 0);
        clearTimeout(timeout);
      }
      this.servifactura.traertodaslasfacturas(this.pagina).subscribe((data) => {
        this.clienteSeleccionado = {
          nombre: 'Seleccione un cliente',
          identificacion: '',
          email: '',
          celulares: '',
          direccion: '',
          telefonoFijo: '',
          codigo: 0,
          imagen: null,
          ciudad: '',
        };

        this.total_registros = data.nregistros;
        this.totalCartera = data.saldo;
        this.factura.data = this.generafilaresume(data.respuesta);

        // this.router.navigate(['admin/cartera'], { queryParams: { pagina: 1 } });
      });
    } else {
      if (this.clienteSeleccionado.codigo === 0) {
        this.factura.data = [];
        this.totalCartera = 0;
        this.total_registros = 0;
        this.router.navigate(['admin/cartera'], {
          queryParams: { pagina: 1 },
        });
      }
    }
  }
}
