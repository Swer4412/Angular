import { Component, Input} from '@angular/core';
import { WishItem } from '../../../share/models/wishItem';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  //Diciamo ad angular che wishes è una proprietà il cui input viene da un altro componente,
  //tipo props in react (const componente ({wishes}) => {...}), solo che in angular è bidirezionale
  @Input() wishes : WishItem[] = []

  toggleItem(item: WishItem) { 
    //Questo viene fatto perchè l'utilizzo di {{}} è un one-way binding, di conseguenza il valore registrato in html è sempre lo stesso
    item.isComplete = !item.isComplete 
  }
}
