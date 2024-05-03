import { Spiaggia } from "./spiaggia";

export interface Calendario {
    id: number,
    data: Date,
    spiaggia: Spiaggia,
    disponibilita: number
}