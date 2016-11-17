/**
 * Created by admin on 2016/11/17.
 */
import {Http} from '@angular/http';
import {LoggerService}from './logger.service';
import {UserService}from './user.service';
import {HeroService}from './hero.service'

let heroServiceFactory = (http:Http,logger: LoggerService, userService: UserService) => {
    return new HeroService(http,logger, userService.getuser().isAuthorized);
};
export let heroServiceProvider =
{ provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Http,LoggerService,UserService]
};
