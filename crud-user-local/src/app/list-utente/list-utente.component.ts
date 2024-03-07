import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-utente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-utente.component.html',
  styleUrl: './list-utente.component.css'
})
export class ListUtenteComponent {

  constructor(private router: Router) {

  }

  detail(id: number) {

    this.router.navigateByUrl(`/detail/${id}`);
  }
}
