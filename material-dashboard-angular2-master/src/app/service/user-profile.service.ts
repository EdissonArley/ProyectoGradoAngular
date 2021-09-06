import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private url: string ='http://localhost:8080/usuario';
  constructor(private httpClient: HttpClient) { }

  traerUsuario(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url)
}
}
