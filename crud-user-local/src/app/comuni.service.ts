import { Injectable } from '@angular/core';
import { Comune } from './_dto/comune';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  constructor(private httpClient: HttpClient) {

  }

  findAll() {
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem("token"));

    console.log(headers)
    //Ritorna un oggetto obervable
    return this.httpClient.get("http://localhost:8080/api/v1/comuni", {headers: headers})
  }


  login(username: string, password: string) {
    
    const url = 'http://localhost:8080/api/v1/auth/login';
    const body = {
      username: username,
      password: password
    };

    return this.httpClient.post(url, body, { responseType : "text" })
  }


}

