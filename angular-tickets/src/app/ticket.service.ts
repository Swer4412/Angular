import { Injectable } from '@angular/core';
import { Ticket } from './_model/ticket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  subjectTicket: Subject<Array<Ticket>> = new Subject();
  private cacheTicket: Array<Ticket> = [];

  constructor() { }

  add(t : Ticket) {

    this.cacheTicket.push(t);

    this.subjectTicket.next(this.cacheTicket);
  }
}
