import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-angular';

  messages: string = '';

  list: string[] = [];

  warning: boolean = false;

  style: string = '';

  coloreBackground: string = '';

  addMessages() {

    this.messages = "Questo è un messaggio di prova";
  }

  fillList() {

    this.list = ['uno','due','tre','quattro'];
  }

  changeWarning() {

    this.warning = !this.warning;
  }

  changeColor(color: string) {

    this.style = color;
  }

}
