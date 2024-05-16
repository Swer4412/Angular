import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GestioneSpiaggeService } from '../gestione-spiagge.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { CalendarioItem } from '../_models/calendario-item';

@Component({
  selector: 'app-scelta-spiaggia',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    DatePipe,
    MatGridListModule,
    RouterModule
  ],
  templateUrl: './scelta-spiaggia.component.html',
  styleUrl: './scelta-spiaggia.component.css'
})
export class SceltaSpiaggiaComponent implements OnInit {

  dispo: Date[] = [];
  items: CalendarioItem[] = [];

  service: GestioneSpiaggeService = inject(GestioneSpiaggeService);

  ngOnInit() {

    let startDate: Date = new Date();
    for(let i = 0;i < 7;i++) {

      this.dispo.push(new Date(startDate));

      startDate.setDate(startDate.getDate() + 1);
    }
  }

  chooseItems(dateStr: string) {

    console.log(`scelta data ${dateStr}`);

    this.items = this.service.getSpiagge(new Date(dateStr));

    console.log(`numero elementi filtrati ${this.items}`);

  }
}
