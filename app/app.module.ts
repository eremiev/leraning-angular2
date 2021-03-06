import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './root/app.component';
import { HeroesComponent }  from './heroes/heroes.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { HeroService } from './hero.service';

import { RoutesModule } from './routes.module';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
	imports:    [ 
					BrowserModule,
					FormsModule,
					HttpModule,
					InMemoryWebApiModule.forRoot(InMemoryDataService),
					RoutesModule
				],
	declarations: [ 	
					AppComponent,
					HeroesComponent,
					DashboardComponent,
					HeroDetailComponent,
					HeroSearchComponent
					
				],
	providers:	[
					HeroService
				],
	bootstrap:	[ 	
					AppComponent 
				]
})
export class AppModule { }