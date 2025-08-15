import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CryptService } from 'src/services/crypt/crypt.service';
import { SocketService } from 'src/services/socket/socket.service';
import { DatosAlerta, DialogoAlerta } from './angular-material/alerta';
import { Socket_producto } from 'src/services/socket/socket.producto.service.ts.service';
import { AuthService } from 'src/services/auth/auth.service';
import { serviciodb } from 'src/services/serviciosdbs/serviciodb.service';
import { Console, log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pedidos';
  mode = { value: 'side' as 'over' | 'push' | 'side' };
  showToolbar: boolean = true; TomarPedidos: boolean = false; ConsultarCartera: boolean = false; CrearReciboIngreso: boolean = false; InventarioFisico: boolean = false;
  public sedes: any;
  public terceroSeleccionado: any;
  private visibilityHandler = this.handleVisibilityChange.bind(this);
  data: any;
  mostrarItemsCartera:boolean=false;
  constructor(
    private router: Router,
    private serviauth: AuthService,
    public dialog: MatDialog,
    private crypt: CryptService,
    private socketproduct: Socket_producto,
    private serviciodb: serviciodb
  ) {}
  ngOnInit(): void {
    this.mode.value = this.serviauth.mode.value;
    this.serviciodb.tienesedeselccionada().subscribe((data) => {
      this.data = data;
              this.opcionesMostrar(data)
      
    });
 
    document.addEventListener('visibilitychange', this.visibilityHandler);
  }
  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
  }

  handleVisibilityChange() {
    this.serviauth.verificarvendedor().subscribe((data) => {
       
      if (!data?.response) {
        this.data = null;
        this.router.navigate(['auth/login']);
      } else {
        this.serviciodb.tienesedeselccionada().subscribe((data) => {
            this.opcionesMostrar(data)
          this.data = data;
        });
      }
    });
  }
  salir() {
    const dialogrfrecibo=this.dialog.open(DialogoAlerta,{
            data:{
              boton1:'No',
              boton:'Si',
              mensaje:"Seguro desea cerrar la sesión?",
              tipo:"warning"
            },
            disableClose:false
          })
    dialogrfrecibo.afterClosed().subscribe(
      data=>{
        if(!data){
          return
        }else{
          this.serviauth.salir().subscribe((res) => {
            this.data = null;
            this.router.navigate(['auth/login']);
          });
        }
      }
    )
  }
  opcionesMostrar(datos:any){
        if(datos?.response){
      let permisoscadena:string[]
            let permisos=JSON.parse(datos.permisos);
      permisoscadena=permisos.map((permiso:any)=>{return permiso.permiso})
        this.TomarPedidos=true
      this.ConsultarCartera=true
      this.CrearReciboIngreso=true
      this.InventarioFisico=true

      if(!permisoscadena.includes("TOMAR_PEDIDO")){
        this.TomarPedidos=false
      }
      
            if(!permisoscadena.includes("INVENTARIO FISICO")){
        this.InventarioFisico=false
      }
      if(!permisoscadena.includes("CREAR INGRESOS")){
      
        this.CrearReciboIngreso=false
      }

       if(!permisoscadena.includes("CXC")){
        this.ConsultarCartera=false
      }
          }else{
      this.TomarPedidos=false
      this.ConsultarCartera=false
      this.CrearReciboIngreso=false
      this.InventarioFisico=false
          }
  }

  mostrarSubItem(nItem:Number){
    switch (nItem) {
      case 1:
        this.mostrarItemsCartera=true;
        break;
    
      default:
        break;
    }
  }

  verificarItemMenuAVisualizar(){

  }

}
