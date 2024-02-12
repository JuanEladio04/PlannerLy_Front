import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public findById(id: number): Observable<Usuario> {
    let u = {
      id: id
    };

    let url = "http://localhost:8080/usuario/findById"
    return this.http.post<Usuario>(url, u);
  }

  public authUserLogin(email: string, password: string): Observable<Answer> {
    let u = {
      email: email,
      password: password
    }

    let url = "http://localhost:8080/usuario/autentifyUser"
    return this.http.post<Answer>(url, u);
  }

  public insertUser(u: Usuario): Observable<Answer> {
    let user = {
      userName: u.userName,
      name: u.name,
      secondName: u.secondName,
      f_nac: u.f_nac,
      phone_number: u.phone_number,
      email: u.email,
      password: u.password
    }

    let url = "http://localhost:8080/usuario/insertUser"
    return this.http.post<Answer>(url, user);
  }

}
