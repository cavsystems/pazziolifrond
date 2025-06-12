import { Component, OnInit } from '@angular/core';
import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { AuthService } from 'src/services/auth/auth.service';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { debounceTime, filter, take } from 'rxjs/operators';
import { SocketService } from 'src/services/socket/socket.service';

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
  constructor(
    private socketservidbs: serviciodb,
    private socketServices: SocketService,
    private serviauth:AuthService,
    private socketproduct: Socket_producto,
  ) {}
  
  ngOnInit(): void {
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
}
