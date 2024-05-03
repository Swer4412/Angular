import { Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Spiaggia } from '../../_models/spiaggia'
import { GestioneSpiaggeService } from '../gestione-spiagge.service';
import { Calendario } from '../../_models/calendario';

@Component({
  selector: 'app-scelta-spiaggia',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './scelta-spiaggia.component.html',
  styleUrl: './scelta-spiaggia.component.css',
})
export class SceltaSpiaggiaComponent {

  minDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDate);
  }

  service: GestioneSpiaggeService = inject(GestioneSpiaggeService)

  selectedDate: Date = new Date()

  listSpiagge: Array<Spiaggia> = [
    {
      id: 1,
      denominazione: 'Spiaggia Paradiso',
      indirizzo: 'Via del Mare, 123, 25080 Paradiso',
      prezzo: 20,
      imageUrl: 'path/to/immagine1.jpg'
    },
    {
      id: 2,
      denominazione: 'Lido Sole e Luna',
      indirizzo: 'Viale del Tramonto, 45, 25080 Lido',
      prezzo: 15,
      imageUrl: 'path/to/immagine2.jpg'
    },
    {
      id: 3,
      denominazione: 'Baia dei Coralli',
      indirizzo: 'Strada Costiera, 9, 25080 Baia',
      prezzo: 25,
      imageUrl: 'path/to/immagine3.jpg'
    }
  ];

  listCalendario: Array<Calendario> = [
    {
      id: 1,
      data: new Date(2024, 5, 15), // 15 Giugno 2024
      spiaggia: this.listSpiagge[0], // Assumi che spiagge[0] sia un oggetto Spiaggia valido
      disponibilita: 100
    },
    {
      id: 2,
      data: new Date(2024, 5, 16), // 16 Giugno 2024
      spiaggia: this.listSpiagge[1], // Assumi che spiagge[1] sia un oggetto Spiaggia valido
      disponibilita: 80
    },
    {
      id: 3,
      data: new Date(2024, 5, 17), // 17 Giugno 2024
      spiaggia: this.listSpiagge[2], // Assumi che spiagge[2] sia un oggetto Spiaggia valido
      disponibilita: 50
    }
  ]

  onDateSelected(event: any) {
    this.selectedDate = event.value;
    //Mostra roba
  }

  
}
