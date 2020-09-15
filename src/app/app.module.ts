
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import
{
  EventListComponent,
  EventItemComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolverService,
} from './events/index'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './errors/404.component'
import {appRoutes} from './router';

import { EventService } from './services/event.service';
import { CanDeactivateGuardService } from './services/candeactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolverService,
    CanDeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }