import { Injectable } from '@angular/core';
import { Comune } from './_dto/comune';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  constructor(private httpClient: HttpClient) {

  }

  findAll() {
    //Ritorna un oggetto obervable
    return this.httpClient.get("http://localhost:8080/api/v1/comuni")
  }

  login(username: string, password : string) {
    this.httpClient.post("http://localhost:8080/api/v1/auth/login",
    {
      username: username,
      password: password
    })
  }


}

