import { Routes} from '@angular/router'
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolverService,
    EventListComponent

} from './events/index'

import { Error404Component } from './errors/404.component';
import { CanDeactivateGuardService } from './services/candeactivate-guard.service';


export const appRoutes:Routes=[
    { path:'events/new',component:CreateEventComponent,canDeactivate:[CanDeactivateGuardService]},
    { path:'events', component:EventListComponent,resolve:{events:EventListResolverService}},
    { path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    { path:'404',component:Error404Component},
    { path:'',redirectTo:'/events', pathMatch:'full'},
    { path:'user', loadChildren:()=>import('src/app/user/user.module').then(m=>m.UserModule)}
] 