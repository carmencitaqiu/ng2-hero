import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule}   from '@angular/http';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroesComponent} from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { NgZorroAntdModule} from 'ng-zorro-antd';

import { HeroService } from './hero.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    // NgZorroAntdModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
