import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
	title = 'Tour of Heroes';
	hero: Hero = {
		id:1,
		name: 'Windstorm'
	};
	heroes: Hero[];
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	constructor(private router: Router, private heroService: HeroService) {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail() :void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: string):void {
		name = name.trim();
		this.heroService.create(name).then(hero => {
			this.heroes.push(hero);
			this.selectedHero = null;
		})
	}

	delete(hero: Hero):void {
		this.heroService
			.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) {
					this.selectedHero = null;
				}
			});
	}
}