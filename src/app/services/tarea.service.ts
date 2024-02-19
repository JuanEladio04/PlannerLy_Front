import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { Observable } from 'rxjs';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  
    /**
     * Finds all the tareas of a work space
     * @param workSpaceId 
     * @returns 
     */  
    public findByWorkSpaceId(workSpaceId: number): Observable<Tarea[]> {
      const url = `http://localhost:8080/publication/tarea/findByWorkSpaceId/${workSpaceId}`;
      return this.http.get<Tarea[]>(url);

    }

    /**
     * Inserts a new tarea
     * @param workSpaceId 
     * @param cNota 
     * @returns 
     */
    public createTarea(workSpaceId: number, cTarea : Tarea): Observable<Answer> {
      let nota = {
        wkid : workSpaceId,
        name : cTarea.name,
        state : cTarea.state,
        description : cTarea.description
      }

      const url = 'http://localhost:8080/publication/tarea/insertTarea';
      return this.http.post<Answer>(url, nota);
    }

    /**
     * Update a selected tarea
     * @param cTarea 
     * @returns 
     */
    public updateTarea(cTarea : Tarea) : Observable<Answer> {
      let nota =  {
        pId : cTarea.pId,
        name : cTarea.name,
        state : cTarea.state,
        description : cTarea.description
      }

      const url = 'http://localhost:8080/publication/tarea/updateTarea';
      return this.http.put<Answer>(url, nota);
    }
}
