import { Injectable } from '@angular/core';
import { Comune } from './_dto/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  constructor() { }

  comuniArray : Array<Comune> = [
    {
      codComune: "A001",
      codUnitaTerritoriale: "01",
      progressivoComune: "001",
      denItaExt: "Abano Terme",
      denIta: "Abano Terme",
      flagCapoluogo: "N"
    },
    {
      codComune: "A004",
      codUnitaTerritoriale: "01",
      progressivoComune: "004",
      denItaExt: "Abbadia Cerreto",
      denIta: "Abbadia Cerreto",
      flagCapoluogo: "N"
    }
  ];
  

}

