import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string //! è il Non Null Assertion Operator, cioè dici a typescript di non preoccuparsi che tanto quel valore non è nullo
  
  @Input() fullfilled! : boolean
  @Output() fullfilledChange = new EventEmitter<boolean>()

  get cssClasses() {
    //Non so come funzioni ma funziona
    return {'strikeout' : this.fullfilled} 
  }

  removeWish() {
    events.emit('removeWish', this.wishText)
  }

  toggleFullfilled() { 
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
  }
}
