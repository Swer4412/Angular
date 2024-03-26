import { Component, Input } from '@angular/core';
import { WishItem } from '../../../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../share/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    //Non so come funzioni ma funziona
    return { strikeout: this.wish.isComplete };
  }

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
