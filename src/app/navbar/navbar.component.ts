import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() parentToClient:any;
  @Output() SendToParent=new EventEmitter();

  sendMessageToParent(){
   this.SendToParent.emit(this.parentToClient);
  }
}
