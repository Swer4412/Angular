import { Component, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CalendarioItem } from '../_models/calendario-item';
import { ActivatedRoute, Router } from '@angular/router';
import { GestioneSpiaggeService } from '../gestione-spiagge.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-prenota-spiaggia',
  templateUrl: './prenota-spiaggia.component.html',
  styleUrl: './prenota-spiaggia.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    DatePipe
  ]
})
export class PrenotaSpiaggiaComponent implements OnInit {

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  service: GestioneSpiaggeService = inject(GestioneSpiaggeService);

  calendarioItem?: CalendarioItem;

  //Controller del form
  postiControl = new FormControl('', Validators.required)

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.calendarioItem = this.service.getCalendarioItem(params['id']);

      //Setto un validatore 
      this.postiControl.addValidators(Validators.max(this.calendarioItem.disponibilita))
    });

  }

  prenota() {

    if (this.calendarioItem && this.postiControl.value) {
      this.service.prenota(this.calendarioItem, parseInt(this.postiControl.value))
      alert('Prenotazione completata!')
    }

  }

}
