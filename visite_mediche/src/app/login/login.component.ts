import { Component } from '@angular/core';
import { PrenotazioneService } from '../prenotazione.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private service : PrenotazioneService) {}

  userName: string = ""
  password: string = ""

  HandleClick($event: MouseEvent) {
    this.router.navigateByUrl("/prenotazioni")
    
    this.service.login(this.userName, this.password).subscribe(
      (data) => {
        localStorage.setItem("token", data)
        this.router.navigateByUrl("/prenotazioni")
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  
}
