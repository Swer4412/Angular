import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import events from '../../../share/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem

  get cssClasses() {
    //Non so come funzioni ma funziona
    return {'strikeout' : this.wish.isComplete} 
  }

  removeWish() {
    events.emit('removeWish', this.wish)
  }

  toggleFullfilled() { 
    this.wish.isComplete = !this.wish.isComplete
  }
}
