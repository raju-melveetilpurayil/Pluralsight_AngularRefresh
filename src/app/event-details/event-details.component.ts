import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EventService } from '../services/event.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:any;
  constructor(private eventService:EventService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.params['id']);
    this.event=this.eventService.getEvent(id);
  }

}
