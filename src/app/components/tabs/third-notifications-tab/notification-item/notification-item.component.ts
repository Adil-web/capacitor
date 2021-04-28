import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {

  @Input()
  name:string

  @Input()
  event:string

  @Input()
  date:string

  constructor() { }

  ngOnInit() {}

}
