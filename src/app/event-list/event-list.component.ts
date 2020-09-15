import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  // selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  
  events:any;
  constructor(private eventService:EventService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(event=>{
    //   this.events=event;
    // });
    this.events=this.route.snapshot.data["events"];
  }
  
}
