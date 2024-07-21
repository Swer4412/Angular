import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  //Le cose che vengono messe nel costruttore vengono inzializzate appena viene inzializzato il componente
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    //Inizializzo un formgroup per fare controlli sui vari input della form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  //Quando viene cliccato il bottone per il login, viene attivata questa funzione
  HandleClick() {
    //Nel caso non sia valido il form, non faccio niente
    if (!this.loginForm.valid) {
      return;
    }
    //Altrimenti faccio una chiamata al service
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        //Nel caso la chiamata vada a buon fine salvo il token jwt nel localstorage
        localStorage.setItem('token', data);
        alert("Login effettuato con successo! Benvenuto")
        //ATTENZIONE, da ora in poi l'utente ha il token per fare le richiesta, 
        //ma non significa che non possa andare nelle altre route anche senza averlo
        //L'utente però se non ha un token valido, non può comunicare in nessun modo con il back end, questo garantisce la sicurezza dei dati
        //Il passaggio successivo, per offrire una migliore user experience é non permettere l'accesso ad altre rotte, se non ha il token
        this.router.navigateByUrl('/prenotazioni');
      },
      //Se la chiamata non va a buon fine allora mostro nella console l'errore
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
