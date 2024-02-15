import { WorkSpace } from './../interfaces/work-space';
import { Usuario } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkSpaceService {

  constructor(private http: HttpClient) { }

  public findByUser() {
    let url = "http://localhost:8080/belong/getUsersWorkSpaces";
    return this.http.get<WorkSpace[]>(url);
  }
  
}
