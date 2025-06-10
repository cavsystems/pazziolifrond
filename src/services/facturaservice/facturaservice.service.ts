import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FacturaserviceService {
  constructor(private http: HttpClient) {}

  traerfacturas(pagina: number, codigotercero: number): Observable<any> {
    return this.http.get(
      `${environment.api}/obtenerfactura?pagina=${pagina}&codigo=${codigotercero}`,
      { withCredentials: true }
    );
  }

  traertodaslasfacturas(pagina: number): Observable<any> {
    return this.http.get(
      `${environment.api}/obtenerfacturaall?pagina=${pagina}`,
      { withCredentials: true }
    );
  }

  facturapdf(): Observable<any> {
    return this.http.get(`${environment.api}/pdffactura`, {
      withCredentials: true,
    });
  }

  traerbancos():Observable<any>{
        return this.http.get(`${environment.api}/traerbancos`,{withCredentials:true})
  }

  crearreciboingreso(data:any):Observable<any>{
    return this.http.post(`${environment.api}/crearreciboingreso`,data,{withCredentials:true})
  }
}
