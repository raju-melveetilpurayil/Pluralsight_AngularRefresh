import { from } from 'rxjs';
import{ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router'
import {Injectable} from '@angular/core'
import { EventService } from 'src/app/services/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService,private router:Router) {
        
    }
    canActivate(route:ActivatedRouteSnapshot){
        const isEvent=!!this.eventService.getEvent(+route.params['id']);
        if(!isEvent)
            this.router.navigate(['/404'])
        return isEvent;
    }
}