import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.scss'],
})
export class ObjectItemComponent implements OnInit {

  @Input() typeIcon:string
  @Input() title:string

  constructor() { }

  ngOnInit() {}

}
