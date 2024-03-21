import { Component } from '@angular/core';
import { ComuniService } from '../comuni.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private service : ComuniService) {

  }

  userName: string = ""
  password: string = ""

  token : string = "";

  HandleClick($event: MouseEvent) {
    
    this.service.login(this.userName, this.password)
  }

  
}
