import { MedicoDTO } from "./MedicoDTO";
import { UtenteDTO } from "./UtenteDTO";

export interface PrenotazioneDTO {
    id: number;
    utente: UtenteDTO;
    medico: MedicoDTO;
    data: Date;
    ora: number;
    dataPrenotazione: Date;
    codiceConferma: string;
  }
  