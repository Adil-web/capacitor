import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-telegram-item',
  templateUrl: './telegram-item.component.html',
  styleUrls: ['./telegram-item.component.scss'],
})
export class TelegramItemComponent implements OnInit {

  @Input() title:string
  @Input() icon:string

  constructor() { }

  ngOnInit() {}

}
