import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LandTendersModule } from './land-tenders/land-tenders.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MyTasksModule } from './my-tasks/my-tasks.module';
import { ObjectGroupsModule } from './object-groups/object-groups.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    Tab1PageRoutingModule,
    LandTendersModule,
    ConversationsModule,
    MyTasksModule,
    ObjectGroupsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
