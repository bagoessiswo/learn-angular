import { Component, OnInit } from '@angular/core'
import { Hero } from '../../interface/hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
