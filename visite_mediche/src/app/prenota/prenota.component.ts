import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PrenotazioneService } from '../prenotazione.service';
import { CommonModule } from '@angular/common';
import { PrenotazioneDTO } from '../_model/PrenotazioneDTO';
import { Router } from '@angular/router';
import { MedicoDTO } from '../_model/MedicoDTO';

@Component({
  selector: 'app-prenota',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css'],
})
export class PrenotaComponent {
  prenotazioneForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.prenotazioneForm = this.fb.group({
      medico: ['', Validators.required],
      data: ['', Validators.required],
      ora: ['', Validators.required],
    });

    //Quando carico la pagina prendo i medici dal service
    this.service
        .prendiMedici()
        .subscribe((medici: MedicoDTO[]) => {
          this.medici = medici
        });
  }

  today : Date = new Date()

   //Definisco le categorie
  medici : Array<MedicoDTO> = [];

  //Inietto il service
  service: PrenotazioneService = inject(PrenotazioneService);

  //Gestisco la submit del form
  onSubmit() {
    if (this.prenotazioneForm.valid) {
      this.service
        .prenotaVisita(this.prenotazioneForm.value)
        .subscribe((entity: PrenotazioneDTO) => {
          alert(`Inserita prenotazione con codice di conferma ${entity.codiceConferma}`)
          this.router.navigate(['/prenotazioni']);
        });
    }
  }
}
