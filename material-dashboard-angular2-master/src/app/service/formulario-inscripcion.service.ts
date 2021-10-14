import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormularioInscripcion } from 'app/model/formulario-inscripcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioInscripcionService {

  private url: string ='http://localhost:8080/formulario';
  constructor(private httpClient: HttpClient) { }

  crearFormularioInscripcion(formularioInscripcion : FormularioInscripcion): Observable<FormularioInscripcion>{
    console.log('ese es el formulario que se envia ' );
    console.log(formularioInscripcion);
    return this.httpClient.post<FormularioInscripcion>(this.url,formularioInscripcion)
  }
}
