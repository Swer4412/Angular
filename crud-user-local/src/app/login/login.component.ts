import { Component } from '@angular/core';
import { ComuniService } from '../comuni.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private service : ComuniService) {}

  userName: string = ""
  password: string = ""

  HandleClick($event: MouseEvent) {
    
    this.service.login(this.userName, this.password).subscribe(
      (data) => {
        localStorage.setItem("token", data)
        this.router.navigateByUrl("/list")
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  
}
