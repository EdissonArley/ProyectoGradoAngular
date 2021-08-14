import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from 'app/model/departamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url: string ='http://localhost:8080/departamento';
  constructor(private httpClient: HttpClient) { }

  traerDepartamento(): Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(this.url)
}
}
