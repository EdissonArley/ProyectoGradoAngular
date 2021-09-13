import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from 'app/model/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url: string = 'http://localhost:8080/estudiante';
  constructor(private httpClient: HttpClient) { }

  traerEstudiante(): Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(this.url);
  }

  traerEstudianteById(idEstudiante : number): Observable<Estudiante>{
    return this.httpClient.get<Estudiante>(this.url + "/" + idEstudiante)
  }
}
