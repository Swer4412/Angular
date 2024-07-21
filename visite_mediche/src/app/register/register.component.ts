import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../auth.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatDividerModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class RegisterComponent {
  utenteForm: FormGroup;

  today: Date = new Date();

  //Solo i maggiorenni possono registrarsi
  dateEighteenYearsAgo: Date = new Date(
    this.today.getFullYear() - 18,
    this.today.getMonth(),
    this.today.getDate()
  );

  //Le cose che vengono messe nel costruttore vengono inzializzate appena viene inzializzato il componente
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.utenteForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      codiceFiscale: ['', Validators.required],
      dataNascita: ['', Validators.required],
    });
  }

  //Quando viene cliccato il bottone per la registrazione, viene attivata questa funzione
  onSubmit() {
    //Se il form é valido
    if (this.utenteForm.valid) {
      //Registro l'utente
      this.authService.register(this.utenteForm.value).subscribe(() => {
        //Se non ci sono problemi, faccio andare il nuovo utente sulla login
        alert("Registrazione effettuata con successo!")
        this.router.navigateByUrl('/login');
      });
    }
  }
}
