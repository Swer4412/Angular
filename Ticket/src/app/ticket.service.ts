import { Injectable } from '@angular/core';
import { Ticket } from './_model/Ticket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() {}

  subjectTicket: Subject<Array<Ticket>> = new Subject()
  
  private cacheTicket: Array<Ticket> = []

  add(t: Ticket) {
    this.cacheTicket.push(t)

    this.subjectTicket.next(this.cacheTicket)
  }

}
