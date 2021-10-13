import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facultad } from 'app/model/facultad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private url: string ='http://localhost:8080/facultad';
  constructor(private httpClient: HttpClient) { }

  traerFacultad(): Observable<Facultad[]>{
    return this.httpClient.get<Facultad[]>(this.url)
}
}
