/**
 * Created by admin on 2016/11/15.
 */
import {platformBrowserDynamic}     from '@angular/platform-browser-dynamic';

import {AppModule}                  from './module/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
