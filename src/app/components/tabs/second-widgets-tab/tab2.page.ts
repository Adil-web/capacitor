import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  users:any[] = [
    {
      name: 'Nurlan Abishev (tk.na)',
      icon: 'star-outline',
      link: null,
    },
    {
      name: 'Anuar AGS (tk.anuar)',
      icon: 'star-outline',
      link: null,
    },
  ]

  constructor() {}

  ngOnInit() {
  }
}
