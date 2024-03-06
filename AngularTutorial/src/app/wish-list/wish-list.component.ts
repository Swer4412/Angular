import { Component, Input} from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';



@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  //Diciamo ad angular che wishes è una proprietà il cui input viene da un altro componente,
  //tipo props in react (const componente ({wishes}) => {...}), solo che in angular è bidirezionale
  @Input() wishes : WishItem[] = []
}
