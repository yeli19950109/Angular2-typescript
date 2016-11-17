/**
 * Created by admin on 2016/11/15.
 */
import { Component }        from '@angular/core';
import {UserService}from '../../service/user.service';
import {heroServiceProvider}        from '../../service/hero.service.provider';
@Component({
    moduleId:module.id,
    selector: 'my-app',
    template: `
          <h1>{{title}}</h1>
          <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
          </nav>
          <router-outlet></router-outlet>
    `,
    styleUrls:['app.component.css'],
    providers:[UserService,heroServiceProvider]
})
export class AppComponent {
    title = 'Tour of Heroes';
}

