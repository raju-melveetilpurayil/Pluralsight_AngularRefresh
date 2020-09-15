import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { ProfileComponent } from './user/profile.component';

import {appRoutes} from './router';

import { EventService } from './services/event.service';
import { EventListResolverService } from './event-list/event-list-resolver.server';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
  {
    provide:'canDeactivateCreateEvent',
    useValue:'checkDirtyState'
  },
  EventListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(){
  return false;
}