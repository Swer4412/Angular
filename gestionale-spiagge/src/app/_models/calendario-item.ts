import { Spiaggia } from "./spiaggia";

export interface CalendarioItem {

    id: number,
    data: Date,
    spiaggia: Spiaggia,
    disponibilita: number
}