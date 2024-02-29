import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : number = 0
  correct : number = 0
  wrong : number = 0
  turn: number = 0  
  timer: number = 10

  firstNumber : number = 5
  secondNumber : number = 3

  answer : number = 0

  conferma() {
    if ((this.firstNumber + this.secondNumber) == this.answer) {
        this.result++
    } 
  }

}
