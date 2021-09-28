import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from 'app/model/tipo-documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private url: string ='http://localhost:8080/tipoDocumento';
  constructor(private httpClient: HttpClient) { }

  traerTipoDocumento(): Observable<TipoDocumento[]>{
    return this.httpClient.get<TipoDocumento[]>(this.url)
}
}
