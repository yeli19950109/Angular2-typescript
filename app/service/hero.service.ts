/**
 * Created by admin on 2016/11/15.
 */
import                      'rxjs/add/operator/toPromise';
import {Injectable}         from '@angular/core';
import { Headers, Http }    from '@angular/http';

import {Hero}               from "../model/hero"
import {HEROES}             from '../model/mock-heroes';
import {LoggerService}      from './logger.service';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(
        private http: Http,
        private logger:LoggerService
    ) {}
    http_getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    http_update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    http_create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    http_delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        this.logger.log("start");
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>
        (resolve =>setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    http_getHero(id:number):Promise<Hero>{
        return  this.http_getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
