import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

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
  
    this.events=this.route.snapshot.data["events"];
  }
  
}
