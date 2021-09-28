import { ProgramaAcademico } from './../model/programa-academico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaAcademicoService {

  private url: string ='http://localhost:8080/programaAcademico';
  constructor(private httpClient: HttpClient) { }

  traerProgramaAcademico(): Observable<ProgramaAcademico[]>{
    return this.httpClient.get<ProgramaAcademico[]>(this.url)
}
}
