import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from 'app/model/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url: string ='http://localhost:8080/estado';
  constructor(private httpClient: HttpClient) { }

  traerEstado(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(this.url)
}
}


