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
import { AssistenzaService } from '../assistenza.service';
import { CommonModule } from '@angular/common';
import { Assistenza } from '../_model/AssistenzaDto';
import { Router } from '@angular/router';
import { Categoria } from '../_model/Categoria';

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
  assistenzaForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.assistenzaForm = this.fb.group({
      categoria: ['', Validators.required],
      durataOre: ['', Validators.compose([Validators.required, Validators.min(1)])],
      dataRitiro: ['', Validators.required],
      nominativo: ['', Validators.compose([Validators.required, Validators.min(4)])],
    });

  }

  today : Date = new Date()

  //Definisco le categorie
 CATEGORIE : Array<Categoria> = [
    { categoria: 'PHONE', prezzo: 30 },
    { categoria: 'TABLET', prezzo: 50 },
    { categoria: 'NOTEBOOK', prezzo: 75 }
  ];

  //Inietto il service
  service: AssistenzaService = inject(AssistenzaService);

  //Gestisco la submit del form
  onSubmit() {
    if (this.assistenzaForm.valid) {
      this.service
        .prenotaAssitenza(this.assistenzaForm.value)
        .subscribe((entity: Assistenza) => {
          alert(`Inserita assistenza con codice di conferma ${entity.codiceConferma}`)
          this.router.navigate(['/tabella']);
        });
    }
  }
}
