import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public _heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino:string ) {

    this.router.navigate( ['/buscar', termino] ) 
  }

}
