import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MyTasksComponent } from './my-tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksDetailModule } from './tasks-detail/tasks-detail.module';


@NgModule({
  declarations: [MyTasksComponent, TaskItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TasksDetailModule
  ]
})
export class MyTasksModule { }
