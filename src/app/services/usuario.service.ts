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

    let url = `http://localhost:8080/usuario/findById/${id}`;
    return this.http.get<Usuario>(url);
  }
/**
 * Allow users to login in the page
 * @param email 
 * @param password 
 * @returns 
 */
  public authUserLogin(email: string, password: string): Observable<Answer> {
    let u = {
      email: email,
      password: password
    }

    let url = "http://localhost:8080/usuario/autentifyUser"
    return this.http.post<Answer>(url, u);
  }
/**
 * Allow users to register in the page
 * @param u 
 * @returns 
 */
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

  /**
   * Finds all the work spaces of a user
   * @param workSpaceId 
   * @returns 
   */
  public findByWorkSpaceId(workSpaceId: number): Observable<Usuario[]> {
    const url = `http://localhost:8080/belong/getUsersOfWorkSpace/${workSpaceId}`;
    return this.http.get<Usuario[]>(url);
  }

  /**
   * Adds a user to a selected work space
   * @param wkId 
   * @param e 
   * @returns 
   */
  public addUserToWorkSpace(wkId: number, e : string) : Observable<Answer> {
    let paramethers = {
      email: e, 
      workSpaceId: wkId
    }

    const url = 'http://localhost:8080/belong/addUserToWorkSpace';
    return this.http.post<Answer>(url, paramethers);
  }

  /**
   * Quits an user from a selected work space
   * @param wkId 
   * @param e 
   * @returns 
   */
  public quitUserToWorkSpace(wkId: number, uId : number) : Observable<Answer> {
    const url = `http://localhost:8080/belong/deleteRelation/${uId}/${wkId}`;
    return this.http.delete<Answer>(url);
  }


}
