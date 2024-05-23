import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assistenza } from './_model/AssistenzaDto';

@Injectable({
  providedIn: 'root',
})
export class AssistenzaService {
  private apiUrl = 'http://localhost:8080/api/v1/negozio';

  //Inietto l'httpClient come dipendenza
  constructor(private http: HttpClient) {}

  prenotaAssitenza(assistenzaData: Assistenza): Observable<any> {
    return this.http.post(this.apiUrl + '/assistenza', assistenzaData);
  }

  prendiAssistenze(): Observable<any> {
    return this.http.get(this.apiUrl + '/assistenze');
  }
}
