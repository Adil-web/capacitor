import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  logs:any[] = [
    {
      title: 'SYSTEM',
      info: 'ACCE19122101: начался(1/1)',
      date: '21.12.2019 00:02'
    },
    {
      title: 'SYSTEM',
      info: 'ACCE19122001: начался(1/1)',
      date: '20.12.2019 00:01'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
