import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../_model/ticket';
import { CommonModule } from '@angular/common';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allinone',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './allinone.component.html',
  styleUrl: './allinone.component.css'
})
export class AllinoneComponent implements OnInit{

  bigliettoFG = new FormGroup({
    nominativo: new FormControl('', Validators.required),
    stazione1: new FormControl('', Validators.required),
    stazione2: new FormControl('', Validators.required),
  });

  list: Array<Ticket> = [];
  listStazioni: string[] = ["Milano", "Bergamo", "Bologna", "Firenze", "Roma", "Torino"]

  constructor(private service: TicketService) {

  }

  ngOnInit(): void {

    this.service.subjectTicket.subscribe(e => {
      this.list = e as Array<Ticket>;
    });
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			//map((term) =>
			
      map((term) => {
        console.log(term)
        return term.length < 2 ? [] : this.listStazioni.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)  
      }
      )
		);

  save() {

    this.service.add({

      id: 0,
      nominativo: this.bigliettoFG.get('nominativo')?.value ?? '',
      stazionePartenza: this.bigliettoFG.get('stazione1')?.value ?? '',
      stazioneArrivo: this.bigliettoFG.get('stazione2')?.value ?? ''
    });
  }


}
