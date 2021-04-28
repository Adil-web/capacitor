import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

  @Input() title
  @Input() state
  @Input() typeIcon
  @Input() stateIcon
  @Input() typeIconColor
  @Input() stateIconColor

  constructor() { }

  ngOnInit() {}

}
