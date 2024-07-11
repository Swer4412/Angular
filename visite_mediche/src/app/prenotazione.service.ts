import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrenotazioneDTO } from './_model/PrenotazioneDTO';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioneService {
  private apiUrl = 'http://localhost:8080/api/v1/visite';

  //Inietto l'httpClient come dipendenza
  constructor(private http: HttpClient) {}

  //TODO autorization con token in ogni richiesta

  prenotaVisita(prenotazioneData: PrenotazioneDTO): Observable<any> {
    return this.http.post(this.apiUrl + '/prenota', prenotazioneData);
  }

  prendiMedici(): Observable<any> {
    return this.http.get(this.apiUrl + '/medici');
  }

  prendiPrenotazioniDaIdUtente(id_utente: number): Observable<any> {
    return this.http.get(this.apiUrl + '/prenotazioni'); //TODO
  }

  login(username: string, password: string) { //TODO
    
    const url = 'http://localhost:8080/api/v1/auth/login';
    const body = {
      username: username,
      password: password
    };

    return this.http.post(url, body, { responseType : "text" })
  }
}
