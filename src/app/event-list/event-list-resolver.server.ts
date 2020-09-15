import {Injectable, OnInit} from '@angular/core'
import {Resolve} from '@angular/router'
import { from } from 'rxjs';
import { EventService } from '../services/event.service'
import{map} from 'rxjs/operators'

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