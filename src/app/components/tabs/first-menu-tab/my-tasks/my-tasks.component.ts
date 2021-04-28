import { Component, OnInit } from '@angular/core';
import { TasksService } from "./tasks-service.service";

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {

  tasks:any[]

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasks = this.tasksService.getAllTasks()
  }

}
