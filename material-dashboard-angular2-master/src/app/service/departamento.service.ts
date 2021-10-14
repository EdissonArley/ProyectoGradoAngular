import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from 'app/model/departamento';
import { FormularioInscripcion } from 'app/model/formulario-inscripcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url: string ='http://localhost:8080/formulario';
  constructor(private httpClient: HttpClient) { }

  traerDepartamento(): Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(this.url)
}

  traerDepartamentoById(idDepartamento : number): Observable<Departamento>{
  return this.httpClient.get<Departamento>(this.url + "/" + idDepartamento)
}

  crearDepartamento(departamento : Departamento): Observable<Departamento>{
  return this.httpClient.post<Departamento>(this.url,departamento)
}

crearFormularioInscripcion(formularioInscripcion : FormularioInscripcion): Observable<FormularioInscripcion>{
  return this.httpClient.post<FormularioInscripcion>(this.url,formularioInscripcion)
}

}
