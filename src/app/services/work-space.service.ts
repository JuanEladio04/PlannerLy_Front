import { WorkSpace } from './../interfaces/work-space';
import { Usuario } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../interfaces/answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkSpaceService {

  constructor(private http: HttpClient) { }

/**
 * Finnd all the user's work spaces
 * @returns 
 */
  public findByUser() {
    let url = "http://localhost:8080/belong/getUsersWorkSpaces";
    return this.http.get<WorkSpace[]>(url);
  }

  public createWorkSpace(ws : WorkSpace): Observable<Answer> {
    var workSpace = {
      name : ws.name,
      description: ws.description
    }

      let url = "http://localhost:8080/workspace/insertWorkSpace";
      return this.http.post<Answer>(url, workSpace);
  }
  
}
