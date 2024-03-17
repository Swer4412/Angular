import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EventService {
    //Serve per passare eventi dall'oggetto observable
    private subject = new Subject()

    emit(eventName: string, payload: any) {
        //Dico al subject di notificare tutti gli observer sottoscritti
        this.subject.next({eventName, payload})
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj : any) => {
            if (eventName === nextObj.eventName) {
                callback(nextObj.payolad)
            }
        })
    }
}