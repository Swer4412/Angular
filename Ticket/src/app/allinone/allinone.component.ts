import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../_model/Ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allinone',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './allinone.component.html',
  styleUrl: './allinone.component.css'
})
export class AllinoneComponent implements OnInit{

  constructor(private service: TicketService){}

  list : Array<Ticket> = []

  ngOnInit(): void {
    this.service.subjectTicket.subscribe(e => {
      this.list = e as Array<Ticket>;
    })
  }

  bigliettoFG = new FormGroup({
    nominativo: new FormControl('', Validators.required),
    stazione1: new FormControl('', Validators.required),
    stazione2: new FormControl('', Validators.required)
  })

  save() {
    this.service.add({
      id: 0,
      nominativo: this.bigliettoFG.get("nominativo")?.value ?? "",
      stazionePartenza: this.bigliettoFG.get("stazione1")?.value ?? "",
      stazioneArrivo: this.bigliettoFG.get("stazione2")?.value ?? "",

    })
  }
  
}
