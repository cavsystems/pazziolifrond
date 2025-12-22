import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class FacturaserviceService {
  public socket: any;
  public socketiniciado = false;
  constructor(private http: HttpClient) {}
  public conectar() {
    // this.socket = io("http://52.86.140.114:3000");

    this.socket = io(`${environment.apisocket}`, {
      transports: ['websocket'],
      withCredentials: true,
    });
    // this.socket = io("localhost:3000");
    this.socket.on('connect', () => {
      this.socketiniciado = true;
    });

    this.socket.on('connect_error', (err: any) => {
      console.error('❌ Error de conexión:', err);
    });

    this.socket.on('disconnect', () => {
      console.warn('⚠️ Desconectado del servidor');
    });
  }
  traerfacturas(pagina: number, codigotercero: number): Observable<any> {
    return this.http.get(
      `${environment.api}/obtenerfactura?pagina=${pagina}&codigo=${codigotercero}`,
      { withCredentials: true }
    );
  }
  public obtenerInfo(
    socket: String,
    canal: String,
    flujo: any
  ): Observable<any> {
    return new Observable((observer: any) => {
      if (socket) {
        this.socket.emit(canal, flujo);
        this.socket.on(socket, (dato: any) => {
          if (!dato) {
            observer.next(JSON.stringify({ Error: 'Datos vacíos o nulos' }));
          } else {
            observer.next(dato);
          }
        });
      } else {
        observer.next('socket no disponidle');
      }
    });
  }

  traertodaslasfacturas(pagina: number): Observable<any> {
    return this.http.get(
      `${environment.api}/obtenerfacturaall?pagina=${pagina}`,
      { withCredentials: true }
    );
  }

  generarpdfid(id:number): Observable<any> {
    return this.http.get(`${environment.api}/pdffactura?codigousuario=${id}`, {
      withCredentials: true,
    });
  }

  traeritemsfactura(row:any):Observable<any>{
    return this.http.get(`${environment.api}/traeritemsfactura?codigo=${row.codigo}&codigoComprobante=${row.codigoComprobante}`, {
      withCredentials: true,
    });
  }

  facturapdf(): Observable<any> {
    return this.http.get(`${environment.api}/pdffactura`, {
      withCredentials: true,
    });
  }
obtenertotalpornombrefactura(nombret:string): Observable<any>{
  return this.http.get(`${environment.api}/obtenertotalpornombrefactura?nombret=${nombret}`,{
    withCredentials:true
  });
}
  traerbancos(): Observable<any> {
    return this.http.get(`${environment.api}/traerbancos`, {
      withCredentials: true,
    });
  }

  crearreciboingreso(data: any): Observable<any> {
    return this.http.post(`${environment.api}/crearreciboingreso`, data, {
      withCredentials: true,
        headers: new HttpHeaders({
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Expires": "0"
      })
    });
  }

  public enviaremail(data: any): Observable<any> {
    return new Observable((obser: any) => {
      this.socket.emit('pazzioli-pos-3', { metodo: 'EMAILINGRESO', data });
      this.socket.on('estadocorreoingreso', (datos: any) => {
        obser.next(datos);
      });
    });
  }


    public enviaremailfacturapendiente(data: any): Observable<any> {
    return new Observable((obser: any) => {
      this.socket.emit('pazzioli-pos-3', { metodo: 'EMAILFACTURAPEDIENTE', data });
      this.socket.on('estadocorreoingreso', (datos: any) => {
        obser.next(datos);
      });
    });
  }

  public enviaremailfactura(data: any): Observable<any> {
    return new Observable((obser: any) => {
      this.socket.emit('pazzioli-pos-3', { metodo: 'EMAILFACTURA', data });
      this.socket.on('estadocorreoingreso', (datos: any) => {
        obser.next(datos);
      });
    });
  }
  public consultaritemubicacion(data:any){
    return new Observable((obser: any) => {
      this.socket.emit('pazzioli-pos-3', { metodo: 'CONSULTAR', consulta:'inventario',
        datoCondicion:data
      });
      this.socket.on('respuestaitemsinventario', (datos: any) => {
        obser.next(datos);
      });
    });

  }
  public traerrecibos(
    techainicio: string,
    fechafinal: string,
    cliente: string
  ): Observable<any> {
    return this.http.get(
      `${environment.api}/traerrecibos?razonsocial=${cliente}&fechainicial=${techainicio}&fechafinal=${fechafinal}`,
      { withCredentials: true }
    );
  }

  public totalrecibo(codigo: string): Observable<any> {
        return this.http.get(
      `${environment.api}/traersaldoactual?codigotercero=${codigo}`,
      {
        withCredentials: true,
      }
    );
  }

  public insertaritemsinventario(item:any):Observable<any>{
   return this.http.post(`${environment.api}/insertariteminventario`,item,{withCredentials:true}) }

   public consultaritemsiventario(pagina:number,cliente:string=''):Observable<any>{
    return this.http.get(`${environment.api}/consultaritemsiventario?pagina=${pagina}&cliente=${cliente}`,{withCredentials:true})
   }

   public consultaritems(pagina:number,cliente:string='',ubicacion:string=''):Observable<any>{
    return this.http.get(`${environment.api}/consultaritems?pagina=${pagina}&descripcion=${cliente}&ubicacion=${ubicacion}`,{withCredentials:true})
   }

   public eliminaritemsinventario(body:any):Observable<any>{
    return this.http.post(`${environment.api}/eliminariteminventario`,body,{withCredentials:true})
   }


   public realizarfactura(data: any): Observable<any> {
    return this.http.post(`${environment.api}/realizarfactura`, data, {
      withCredentials: true,
    });
  }
}
