import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input() userName:string
  @Input() icon:string

  constructor() { }

  ngOnInit() {}

}
