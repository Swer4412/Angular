export interface Noleggio {
    id: number;
    codiceConferma: string;
    categoria: string;
    prezzoGiornaliero: number;
    dataRitiro: Date;
    dataConsegna: Date;
    nominativo: string;
    codiceFiscale: string;
    prezzoTotale: number;
  }
  