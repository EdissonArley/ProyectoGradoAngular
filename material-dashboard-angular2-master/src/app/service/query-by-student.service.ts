import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryByStudent } from 'app/model/query-by-student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryByStudentService {

  private url: string = 'http://localhost:8080/estudiante/documentByStudent';
  constructor(private httpClient: HttpClient) { }

  traerDocumentoByEstudiante(idEstudiante : number) : Observable<QueryByStudent>{
    return this.httpClient.get<QueryByStudent>(this.url + "/" + idEstudiante)
  }
}
