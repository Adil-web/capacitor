import {Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  isItemAvailable = false
  menuItems:any[] = [
    {
      title: 'Беседы',
      src: 'conversations',
      icon: 'mail'
    },
    {
      title: 'Мои задачи',
      src: 'my-tasks',
      icon: 'folder'
    },
    {
      title: 'Группы объектов',
      src: 'object-groups',
      icon: 'folder'
    },
    {
      title: 'Карта',
      src: 'map',
      icon: 'map'
    },
    {
      title: 'Штрих-код',
      src: 'bar-code',
      icon: 'barcode'
    },
  ]

  initializeItems(){
      this.menuItems = [
        {
          id: '1',
          title: 'Земельные торги',
          src: 'land-tenders',
          icon: 'pricetags'
        },
        {
          id: '2',
          title: 'Беседы',
          src: 'conversations',
          icon: 'mail'
        },
        {
          id: '3',
          title: 'Мои задачи',
          src: 'my-tasks',
          icon: 'folder'
        },
        {
          id: '4',
          title: 'Группы объектов',
          src: 'object-groups',
          icon: 'folder'
        },
      ]
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.menuItems = this.menuItems.filter((item) => {
              return (item['title'].toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }

}
