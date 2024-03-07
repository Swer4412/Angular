import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-utente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-utente.component.html',
  styleUrl: './detail-utente.component.css'
})
export class DetailUtenteComponent implements OnInit{

  id: number = -1;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {

      this.id = params['id'];
      console.log("params['id'] " + this.id);
    });
  }
}
