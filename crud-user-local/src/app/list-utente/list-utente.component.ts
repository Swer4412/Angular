import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ComuniService } from '../comuni.service';

@Component({
  selector: 'app-list-utente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-utente.component.html',
  styleUrl: './list-utente.component.css'
})
export class ListUtenteComponent {

  constructor(private router: Router, private service : ComuniService) {

  }

  detail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
