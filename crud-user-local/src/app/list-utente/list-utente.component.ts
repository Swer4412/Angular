import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ComuniService } from '../comuni.service';
import { Comune } from '../_dto/comune';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-utente',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './list-utente.component.html',
  styleUrl: './list-utente.component.css'
})
export class ListUtenteComponent implements OnInit {

  listComuni : Array<Comune> = []

  constructor(private router: Router, private service : ComuniService) {

  }

  ngOnInit(): void {

    console.log("richiamato metodo service findAll()");

    this.service.findAll().subscribe(data => {
      this.listComuni = data as Array<Comune>;
      
    })

    console.log("Termine chiamata");
    
  }

  detail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
