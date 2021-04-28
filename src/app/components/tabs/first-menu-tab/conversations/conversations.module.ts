import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ConversationsComponent } from './conversations.component'
import { ConversationItemComponent } from './conversation-item/conversation-item.component'


@NgModule({
  declarations: [ConversationsComponent, ConversationItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
})
export class ConversationsModule { }
