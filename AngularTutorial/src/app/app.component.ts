import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root', //Questo determina come il componente puo essere richiamato es. <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items : WishItem[] = [
    new WishItem("Imparare angular"),
    new WishItem("Imparare react", true),
    new WishItem("Imparare linux")
  ]

  constructor() {
    events.listen('removeWish', () => {
      
    })
  }

  filter : any
}