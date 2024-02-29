import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../share/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', //Questo determina come il componente puo essere richiamato es. <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem("Imparare angular"),
    new WishItem("Imparare react"),
    new WishItem("Imparare linux")
  ]


}
