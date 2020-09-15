import { Routes} from '@angular/router'
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolverService } from './event-list/event-list-resolver.server';
import { EventListComponent } from './event-list/event-list.component';


export const appRoutes:Routes=[
    { path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    { path:'events', component:EventListComponent,resolve:{events:EventListResolverService}},
    { path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    { path:'404',component:Error404Component},
    { path:'',redirectTo:'/events', pathMatch:'full'}
] 