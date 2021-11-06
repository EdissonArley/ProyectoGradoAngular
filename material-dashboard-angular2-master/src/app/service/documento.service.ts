import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from 'app/model/documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private url: string ='http://localhost:8080/documento';
  
  constructor(private httpClient: HttpClient) { }

  traerDocumento(): Observable<Documento[]>{
    return this.httpClient.get<Documento[]>(this.url)
  }

  crearDocumento(documento : Documento): Observable<Documento>{
    return this.httpClient.post<Documento>(this.url,documento)
  }
}
