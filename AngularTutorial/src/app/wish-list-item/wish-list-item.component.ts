import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string //! è il Non Null Assertion Operator, cioè dici a typescript di non preoccuparsi che tanto quel valore non è nullo
  
  @Input() fullfilled! : boolean
  @Output() fullfilledChange = new EventEmitter<boolean>()

  toggleFullfilled() { 
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
  }
}
