import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrenotazioneDTO } from './_model/PrenotazioneDTO';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioneService {

  //Url che uso per tutte le chiamte in questo service
  private apiUrl = 'http://localhost:8080/api/v1/visite';

  //Inietto l'httpClient come dipendenza
  constructor(private http: HttpClient) {}

  //Ottengo il token da mandare in ogni richiesta
  token = localStorage.getItem('token');

  //Inserirsco il token nelle headers
  headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  prenotaVisita(prenotazioneData: PrenotazioneDTO): Observable<any> {
    prenotazioneData.dataPrenotazione = new Date();

    return this.http.post(this.apiUrl + '/prenota', prenotazioneData, {
      headers: this.headers,
    });
  }

  prendiMedici(): Observable<any> {
    return this.http.get(this.apiUrl + '/medici', { headers: this.headers });
  }

  prendiPrenotazioniDaIdUtente(id_utente: number): Observable<any> {
    return this.http.get(this.apiUrl + '/prenotazioni', {
      headers: this.headers,
    }); 
  }
}
