import { Injectable } from '@angular/core';
import { CalendarioItem } from './_models/calendario-item';
import { Spiaggia } from './_models/spiaggia';
import { Prenotazione } from './_models/prenotazione';

@Injectable({
  providedIn: 'root'
})
export class GestioneSpiaggeService {

  private listSpiagge: Spiaggia[] = [

    { id: 101, denominazione: 'Bagno 71', imageUrl: '/assets/img/bagno71.png', indirizzo: 'Lungomare Della Repubblica, 47838 Riccione RN', prezzo: 30 },
    { id: 105, denominazione: 'Bagno 54', imageUrl: '/assets/img/bagno54.png', indirizzo: 'Lungomare Augusto Murri, 32, 47921 Rimini RN', prezzo: 33 },
    { id: 110, denominazione: 'Bagno 61', imageUrl: '/assets/img/bagno61.png', indirizzo: 'Lungomare Repubblica, bagno 61, 47838 Riccione RN', prezzo: 28 },

  ]

  private calendario: CalendarioItem[] = [];

  constructor() {

    let startDate: Date = new Date();

    let id = 34000;
    for (let i = 0; i < 7; i++) {

      this.calendario[(i*3)] = { id: id++, data: new Date(startDate), spiaggia: this.listSpiagge[0], disponibilita: 100 };
      this.calendario[(i*3) + 1] = { id: id++, data: new Date(startDate), spiaggia: this.listSpiagge[1], disponibilita: 75 };
      this.calendario[(i*3) + 2] = { id: id++, data: new Date(startDate), spiaggia: this.listSpiagge[2], disponibilita: 90 };

      startDate.setDate(startDate.getDate() + 1);
    }

  }
  getSpiagge(data: Date): CalendarioItem[] {

    return this.calendario.filter(e => e.data.toISOString().slice(0,10) == data.toISOString().slice(0,10));
  }

  getCalendarioItem(id: number) {

    let result: CalendarioItem|undefined = this.calendario.find(e => e.id == id);
    if (result) {
      return result;
    }
    throw new Error(`Invalid id ${id}`);
  }

  listPrenotazioni : Prenotazione[] = []

  prenota(item : CalendarioItem, posti: number) {
    let generatedCode = 'aa000aa'

    this.listPrenotazioni.push({
      generatedCode: generatedCode,
      calendarioItem: item,
      posti: posti
    })

    item.disponibilita -= posti

  }

  getPrenotazioni() {
    return this.listPrenotazioni
  }

}