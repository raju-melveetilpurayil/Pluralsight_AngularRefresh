import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  constructor() { }
  @Input() eventSource:any;
  ngOnInit() 
  {

  }
  getStartTimeStyle():any{
    if(this.eventSource && this.eventSource.time==='8:00 am'){
      return {'color':'green','font-weight':'bold'};
    }
    return{}
  }
}
