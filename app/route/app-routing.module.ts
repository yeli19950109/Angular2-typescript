/**
 * Created by admin on 2016/11/15.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../component/dashboard/dashboard.component';
import { HeroesComponent }      from '../component/heros/heroes.component';
import { HeroDetailComponent }  from '../component/herodetail/hero-detail.component';

const routes: Routes = [
    { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
