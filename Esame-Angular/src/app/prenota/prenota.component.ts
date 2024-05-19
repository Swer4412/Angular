import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NoleggioService } from '../noleggio.service';


@Component({
  selector: 'app-prenota',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent {
  noleggioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noleggioForm = this.fb.group({
      categoria: ['', Validators.required],
      prezzoGiornaliero: ['', Validators.required],
      dataRitiro: ['', Validators.required],
      dataConsegna: ['', Validators.required],
      nominativo: ['', Validators.required],
      codiceFiscale: ['', Validators.required]
    });
  }

  service : NoleggioService = inject(NoleggioService)

  onSubmit() {
    if (this.noleggioForm.valid) {

      this.service.prenotaNoleggio(this.noleggioForm.value)

    }
  }
}
