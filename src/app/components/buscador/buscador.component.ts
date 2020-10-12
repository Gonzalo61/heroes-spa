import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../service/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public _heroeService: HeroesService, private _router: Router) { }

  heroes: any [] = [];
  termino: string;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.termino = params['termino'];

      this.heroes = this._heroeService.buscarHeroes(params['termino']);

    })

  }

  
  verHeroe( idx:number ) {
    this._router.navigate( ['/heroe', idx] );
  }


}
