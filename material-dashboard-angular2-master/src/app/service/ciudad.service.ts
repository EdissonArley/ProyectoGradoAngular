import { Ciudad } from './../model/ciudad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private url: string ='http://localhost:8080/ciudad';
  constructor(private httpClient: HttpClient) { }

  traerCiudad(): Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>(this.url)
}
}
