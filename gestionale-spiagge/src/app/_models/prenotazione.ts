import { CalendarioItem } from "./calendario-item";

export interface Prenotazione {
    generatedCode: string,
    calendarioItem: CalendarioItem,
    posti: number

}