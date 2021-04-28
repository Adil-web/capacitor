import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-groups',
  templateUrl: './object-groups.component.html',
  styleUrls: ['./object-groups.component.scss'],
})
export class ObjectGroupsComponent implements OnInit {

  objectItems:any[] = [
    {
      title: 'Данные по клиентам',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Демо для клиентов',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Закуп Лекарств',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Заявка на отпуск 3',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Заявка на отпуск 3.1',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Интеграция с Телеграм',
      icon: 'folder-outline',
      src: 'telegram-integrations'
    },
    {
      title: 'Наборы демо-процессов',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Отпуск',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Родственники',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Тестовая среда',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Юр. лица',
      icon: 'folder-outline',
      src: null
    },
    {
      title: 'Корзина',
      icon: 'trash-outline',
      src: null
    },
  ]

  constructor() { }

  ngOnInit() {}

}
