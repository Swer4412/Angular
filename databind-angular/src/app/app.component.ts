import { Component } from '@angular/core';
import { User } from 'src/dto/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databind-angular';

  //Questo e l'elemento a cui si fa riferimento
  user: User = {username: 'user100', password: '123'};

  resetDefaultValues() {

    this.user.username = 'user1';
    this.user.password = '123';
  }

  confirmDataDOM() {
    // posso recuperare i valori direttamente dal DOM
    this.user.username = (<HTMLInputElement>document.getElementById("id_username")).value;
    this.user.password = (<HTMLInputElement>document.getElementById("password")).value;
  }

  confirmData(username: string, password: string) {
    //Qua non vengono definite delle varaibili ma vengono prese direttamente dal dom.
    this.user.username = username;
    this.user.password = password;
  }

}
