/**
 * Created by admin on 2016/11/15.
 */
import {Component, OnInit}          from '@angular/core';

import { Hero }                     from '../../model/hero';
import { User }                     from '../../model/user';
import { HeroService }              from '../../service/hero.service';
//import {heroServiceProvider}        from '../../service/hero.service.provider';
import { UserService }              from '../../service/user.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:["dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    user:User;
    constructor(
        private heroService: HeroService,
        private userService: UserService
    ) { }
    ngOnInit(): void {
        this.heroService.http_getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
        this.user=this.userService.getuser();
        console.log(this.userService)
    }
}
