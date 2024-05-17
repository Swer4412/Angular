import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService {
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  prenotaNoleggio(noleggioData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'prenota', noleggioData);
  }

  prendiNoleggi(): Observable<any> {
    return this.http.get(this.apiUrl + 'prenotazioni');
  }



}
