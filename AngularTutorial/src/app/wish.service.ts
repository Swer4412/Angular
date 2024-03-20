import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../share/models/wishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//Questa classe si occupa di fare le richieste http per ottenere i dati dal api (che per ora non esiste)
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        "ContentType" : "application/json"
      })
    }
  }
  
  getWishes() {
    let options = this.getStandardOptions() //Bah il bro ama complicarsi la vita
    //Questa è una chiamata get http verso però un file nella cartella assets
    //Get ritorna un observable
    options.params = new HttpParams({ //Questo è come dire ?format=json nell'url
      fromObject: {
        format: "json"
      }
    })

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError))
  }

  private handleError(error : HttpErrorResponse) {
    if (error.status === 0) {
      console.error("There is an issue with the client or network:", error.error)
    } else {
      console.error("Server-side error:", error.error)
    }

    return throwError(() => {new Error("Cannot retrive wishes from the server, please retry again")})
  }

  private addWish(wish : WishItem) {
    let options = this.getStandardOptions()
    options.headers = options.headers.set("authorization", "value-needed-for-authorization")
    this.http.post('assets/wishes.json', wish, options)
  }

}
