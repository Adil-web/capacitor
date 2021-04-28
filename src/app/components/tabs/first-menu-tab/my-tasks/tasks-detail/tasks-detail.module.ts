import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksDetailComponent } from './tasks-detail.component';

@NgModule({
  declarations: [TasksDetailComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    RouterModule.forChild([{ path: '', component: TasksDetailComponent }]),
  ]
})
export class TasksDetailModule { }
