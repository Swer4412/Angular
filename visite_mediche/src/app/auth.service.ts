import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './_model/LoginData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}
  
  login(data: LoginData) {
    
    const url = this.apiUrl + '/login';
    const body = {
      email: data.email,
      password: data.password
    };

    return this.http.post(url, body, { responseType : "text" })
  }
}
