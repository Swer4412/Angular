import { Component , Output, EventEmitter} from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  //Output si mette perchè serve per dichiarare che addwish manda un evento al componente padre
  @Output() addWish = new EventEmitter<WishItem>()
  
  newWishText = "";

  addNewWish() {
    //Addwish è un event emitter, diciamo di creare un nuovo evento di tipo WishItem che poi viene preso
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ""
  }
  
}
