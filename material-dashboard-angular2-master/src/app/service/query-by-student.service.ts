import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryByStudent } from 'app/model/query-by-student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryByStudentService {

  private url: string = 'http://localhost:8080/perfil/';
  constructor(private httpClient: HttpClient) { }

  traerDocumentoByEstudiante(idEstudiante: number): Observable<QueryByStudent> {
    return this.httpClient.get<QueryByStudent>(this.url + "documentByStudent/" + idEstudiante)
  }

  patchEstudiante(data: any, idEstudiante: number): Observable<QueryByStudent>{
    console.log(data);
    return this.httpClient.put<QueryByStudent>(this.url + "updateEstudiante/" + idEstudiante, data)
  }
}