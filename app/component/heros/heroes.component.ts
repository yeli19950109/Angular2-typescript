/**
 * Created by admin on 2016/11/15.
 */
import {Component,OnInit}           from '@angular/core';
import {Router}                     from '@angular/router'

import { Hero }                     from '../../model/hero';
import { HeroService }              from '../../service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    providers: [],
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    title = "My Heroes";
    heroes:Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router:Router
    ) { }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.http_create(name)
            .then(hero => {
                //this.heroes.push(hero);
                this.http_getHeroes();
                this.selectedHero = null;
            });
    }
    delete(hero: Hero): void {
        this.heroService
            .http_delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    http_getHeroes(): void {
        this.heroService.http_getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    getHeroesSlowly():void{
        this.heroService.getHeroesSlowly()
            .then(heroes=>this.heroes=heroes);
    }
    ngOnInit(): void {
        //this.getHeroes();
        //this.getHeroesSlowly();
        this.http_getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
