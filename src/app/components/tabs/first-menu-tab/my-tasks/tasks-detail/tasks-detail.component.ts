import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../tasks-service.service";

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.scss'],
})
export class TasksDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  task:any

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return
      }
      const id = paramMap.get('id')
      this.task = this.tasksService.getTask(id)
    })
  }

}
