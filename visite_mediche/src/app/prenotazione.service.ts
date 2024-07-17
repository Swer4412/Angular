import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrenotazioneDTO } from './_model/PrenotazioneDTO';
import { LoginData } from './_model/LoginData';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioneService {
  private apiUrl = 'http://localhost:8080/api/v1/visite';

  //Inietto l'httpClient come dipendenza
  constructor(private http: HttpClient) {}

  token = localStorage.getItem("token")

  headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

  prenotaVisita(prenotazioneData: PrenotazioneDTO): Observable<any> {
    return this.http.post(this.apiUrl + '/prenota', prenotazioneData, {headers: this.headers});
  }

  prendiMedici(): Observable<any> {
    return this.http.get(this.apiUrl + '/medici', {headers: this.headers});
  }

  prendiPrenotazioniDaIdUtente(id_utente: number): Observable<any> {
    return this.http.get(this.apiUrl + '/prenotazioni', {headers: this.headers}); //TODO
  }

}
