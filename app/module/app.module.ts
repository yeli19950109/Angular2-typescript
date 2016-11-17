/**
 * Created by admin on 2016/11/15.
 */
import  {NgModule}               from '@angular/core';
import  {BrowserModule}          from '@angular/platform-browser';
import  {FormsModule}            from '@angular/forms';
import  {HttpModule}             from '@angular/http';
import                          './rxjs-extensions';

import  {AppRoutingModule}       from '../route/app-routing.module';
import  {HeroService}            from '../service/hero.service';
import  {LoggerService}          from '../service/logger.service';
import  {AppComponent}           from '../component/appstart/app.component';
import  {HeroDetailComponent}    from '../component/herodetail/hero-detail.component';
import  {HeroesComponent}        from '../component/heros/heroes.component';
import  {DashboardComponent}     from '../component/dashboard/dashboard.component';
import  {HeroSearchComponent }   from '../component/herosearch/hero-search.component';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../service/in-memory-data.service';

@NgModule({
    //imports-本模块组件模板中需要由其它模块导出的类
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    //exports-声明(declaration)的子集 它可用于其它模块中的组件 模板
    exports:[

    ],
    //declarations(声明)-本模块中拥有的视图类 Angular有三种视图类:组件 指令 和 管道
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    //providers-服务的创建者 本模块把它们加入全局的服务表中 让它们在应用中的任何部分都可被访问到
    providers: [
        HeroService,
        LoggerService
    ],
    //bootstrap-标识出应用的主视图(被称为根组件)它是所有其它视图的宿主 只有根模块才能设置 bootstrap 属性
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}



