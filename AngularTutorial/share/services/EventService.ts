import { Observable, Subject } from "rxjs";

class eventService {
    //Serve per passare eventi dall'oggetto observable
    private subject = new Subject()

    emit(eventName: string, payolad: any) {
        //Quando viene emesso un evento la funzione next viene chiamata, viene passato questo oggetto {eventName, payolad}
        //Questo oggetto viene passato alla funzione callback
        this.subject.next({eventName, payolad})
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj : any) => {
            if (eventName === nextObj.eventName) {
                callback(nextObj.payolad)
            }
        })
    }
}

export default new eventService()