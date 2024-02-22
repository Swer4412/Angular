import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scegli-colore',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './scegli-colore.component.html',
  styleUrl: './scegli-colore.component.css'
})

export class ScegliColoreComponent implements OnInit{

  @Output()
  outputColor : EventEmitter<string> = new EventEmitter()

  @Input()
  strColori: string = "";

  arrayColori : string[] = []

  ngOnInit(): void { //Questo viene eseguito quando viene inizializzato il componente
    this.arrayColori = this.strColori.split(" ")
  }

  choosenColor : string = ""
  showColor(colore: string) : any {
    this.choosenColor = colore
    this.outputColor.emit(colore) //Emana un evento
  }

}
