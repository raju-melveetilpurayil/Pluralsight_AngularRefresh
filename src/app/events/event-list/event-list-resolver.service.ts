import {Injectable, OnInit} from '@angular/core'
import {Resolve} from '@angular/router'
import { from } from 'rxjs';
import{map} from 'rxjs/operators'
import { EventService } from 'src/app/services/event.service';

@Injectable({
    providedIn: 'root'
  })
export class EventListResolverService implements Resolve<any>{
    
    constructor(private eventService:EventService) {
        
    }
    
    resolve()
    {
        return this.eventService.getEvents().pipe(map(events=>events));
    }
}