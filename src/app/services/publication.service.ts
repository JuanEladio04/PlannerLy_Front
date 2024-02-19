import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../interfaces/answer';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private http: HttpClient
  ) { }

  public deleteById(id: number): Observable<Answer> {
    const url = `http://localhost:8080/publication/deleteById/${id}`;
    return this.http.delete<Answer>(url);
  }
}
