import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './administracion-routing.module';
import { MaterialModule } from 'src/app/angular-material/angular-material.module';
import { RedireccionComponent } from './componentes/redireccion/redireccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ItemspedidoComponent } from './componentes/itemspedido/itemspedido.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CarteraComponent } from './componentes/cartera/cartera.component';
import { RecibodecajaComponent } from './componentes/recibodecaja/recibodecaja.component';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { NgChartsModule } from 'ng2-charts';
import { InventarioFisicoComponent } from './componentes/inventario-fisico/inventario-fisico.component';

@NgModule({
  declarations: [
    TiendaComponent,
    RedireccionComponent,
    PedidosComponent,
    ItemspedidoComponent,
    CarteraComponent,
    RecibodecajaComponent,
    InicialComponent,
    InventarioFisicoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule,
    IonicModule.forRoot(),
    ZXingScannerModule,
    NgChartsModule,
  ],
  providers: [],
})
export class AdministracionModule {}
