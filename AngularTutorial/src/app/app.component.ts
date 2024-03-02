import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'app-root', //Questo determina come il componente puo essere richiamato es. <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items : WishItem[] = [
    new WishItem("Imparare angular"),
    new WishItem("Imparare react", true),
    new WishItem("Imparare linux")
  ]
  
  newWishText = "";

  addNewWish() {
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ""
  }
  
  listFilter : number = 0

  //Può sembrare una funzione ma è un getter, serve per ritornare una proprietà di un oggetto (istanza di classe)
  //Ogni volta che visibleItems viene utilizzata, viene eseguito il codice dentro le parentesi graffe
  //Comportamento simile a python con la definizione di @getter in modo di poter fare:
  //obj.visibleItems (proprietà) e non come in java obj.getVisibleItems() (funzione)
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]) //Al bro piace complicarsi la vita
  }


}