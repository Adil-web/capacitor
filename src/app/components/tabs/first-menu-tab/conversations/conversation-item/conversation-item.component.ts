import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {

  @Input() title:string
  @Input() info:string
  @Input() date:string

  constructor() { }

  ngOnInit() {}

}
