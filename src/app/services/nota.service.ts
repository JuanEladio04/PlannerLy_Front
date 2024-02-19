import { Injectable } from '@angular/core';
import { Notas } from '../interfaces/nota';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../interfaces/answer';


@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

    /**
     * Finds all the notes of a work space
     * @param workSpaceId 
     * @returns 
     */  
    public findByWorkSpaceId(workSpaceId: number): Observable<Notas[]> {
      const url = `http://localhost:8080/publication/nota/findByWorkSpaceId/${workSpaceId}`;
      return this.http.get<Notas[]>(url);

    }

    /**
     * Inserts a new nota
     * @param workSpaceId 
     * @param cNota 
     * @returns 
     */
    public createNota(workSpaceId: number, cNota : Notas): Observable<Answer> {
      let nota = {
        wkid : workSpaceId,
        title : cNota.title,
        subtitle : cNota.subtitle,
        content :  cNota.content
      }

      const url = 'http://localhost:8080/publication/nota/insertNota';
      return this.http.post<Answer>(url, nota);
    }

    public updateNota(cNota : Notas) : Observable<Answer> {
      let nota =  {
        pId : cNota.pId,
        title : cNota.title,
        subtitle : cNota.subtitle,
        content :  cNota.content
      }

      const url = 'http://localhost:8080/publication/nota/updateNota';
      return this.http.put<Answer>(url, nota);
    }
}
