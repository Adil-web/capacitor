import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telegram-integration',
  templateUrl: './telegram-integration.component.html',
  styleUrls: ['./telegram-integration.component.scss'],
})
export class TelegramIntegrationComponent implements OnInit {

  telegramItems:any[] = [
    {
      title: 'Отправка сообщений',
      icon: 'folder-outline'
    },
    {
      title: 'Регистрация номеров',
      icon: 'folder-outline'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
