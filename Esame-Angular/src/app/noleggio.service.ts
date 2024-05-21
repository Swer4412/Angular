import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoleggioService {
  private apiUrl = 'http://localhost:8080/api/v1/auto/';

  constructor(private http: HttpClient) {}

  //Nonostante l'api ritorna una stringa, questa funzione ritorna un observable
  prenotaNoleggio(noleggioData: any): Observable<any> {
    //Aggiungo il prezzo giornaliero
    return this.http.post(this.apiUrl + 'noleggio', noleggioData);
  }

  prendiNoleggi(): Observable<any> {
    return this.http.get(this.apiUrl + 'noleggi');
  }
}
