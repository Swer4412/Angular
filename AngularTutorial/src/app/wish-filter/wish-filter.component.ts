import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../share/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  //Per il 2 way binding, bisogna definire un input con un nome e un output con lo stesso nome + Change
  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>()
  
  ngOnInit(): void {
    //Appena viene caricato il componente, questa funzione viene eseguita
    //Serve per creare un evento che manda la funzione per vedere tutti i wishes
    this.updateFilter(0)
  }
  
  listFilter : number = 0
  
  updateFilter(value: number) {
    this.filter = filters[value]
    this.filterChange.emit(this.filter)
  }

}
