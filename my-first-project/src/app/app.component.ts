import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScegliColoreComponent } from './scegli-colore/scegli-colore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScegliColoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-project';
  str : string = "ciao"
  colore : string = ''
  
  cambia() {
    this.str = "valore2"
  }

  onOutputColor(e:any) {
    alert(e)
    this.colore = e
  }
}
