import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recordatorio } from '../interfaces/recordatorio';
import { Observable } from 'rxjs';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  constructor(private http: HttpClient) { }

    
    /**
     * Finds all the recordatorios of a work space
     * @param workSpaceId 
     * @returns 
     */  
    public findByWorkSpaceId(workSpaceId: number): Observable<Recordatorio[]> {
      const url = `http://localhost:8080/publication/recordatorio/findByWorkSpaceId/${workSpaceId}`;
      return this.http.get<Recordatorio[]>(url);

    }

    /**
     * Inserts a new recordatorio
     * @param workSpaceId 
     * @param cNota 
     * @returns 
     */
    public createRecordatorio(workSpaceId: number, cRecordatorio : Recordatorio): Observable<Answer> {
      let nota = {
        wkid : workSpaceId,
        title : cRecordatorio.title,
        completed : cRecordatorio.completed,
        date : cRecordatorio.date,
        hour : cRecordatorio.hour
      }

      const url = 'http://localhost:8080/publication/recordatorio/insertRecordatorio';
      return this.http.post<Answer>(url, nota);
    }

    /**
     * Update a selected recordatorio
     * @param cTarea 
     * @returns 
     */
    public updateRecordatorio(cRecordatorio : Recordatorio) : Observable<Answer> {
      let nota =  {
        pId : cRecordatorio.pId,
        title : cRecordatorio.title,
        completed : cRecordatorio.completed,
        date : cRecordatorio.date,
        hour : cRecordatorio.hour
      }

      const url = 'http://localhost:8080/publication/recordatorio/updateRecordatorio';
      return this.http.put<Answer>(url, nota);
    }
}
