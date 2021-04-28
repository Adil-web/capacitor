import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { LandTendersComponent } from './land-tenders/land-tenders.component';
import { AuctionComponent } from './land-tenders/auction/auction.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { ObjectGroupsComponent } from './object-groups/object-groups.component';
import { TelegramIntegrationComponent } from './object-groups/telegram-integration/telegram-integration.component';
import { TasksDetailComponent } from './my-tasks/tasks-detail/tasks-detail.component';
import { LMapComponent } from './l-map/l-map.component';
import { BarCodeComponent } from './bar-code/bar-code.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'land-tenders',
    children: [
      {
        path: '',
        component: LandTendersComponent
      },
      {
        path: 'auction',
        component: AuctionComponent
      },
    ]
  },
  {
    path: 'conversations',
    component: ConversationsComponent
  },
  {
    path: 'my-tasks',
    children: [
      {
        path: '',
        component: MyTasksComponent
      },
      {
        path: ':id',
        component: TasksDetailComponent
      }
    ]
  },
  {
    path: 'object-groups',
    children: [
      {
        path: '',
        component: ObjectGroupsComponent
      },
      {
        path: 'telegram-integrations',
        component: TelegramIntegrationComponent
      },
    ]
  },
  {
    path: 'map',
    component: LMapComponent
  },
  {
    path: 'bar-code',
    component: BarCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
