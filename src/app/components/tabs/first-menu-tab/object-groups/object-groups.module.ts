import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectGroupsComponent } from './object-groups.component'
import { ObjectItemComponent } from './object-item/object-item.component'
import { RouterModule } from "@angular/router";
import { TelegramIntegrationModule } from "./telegram-integration/telegram-integration.module";


@NgModule({
  declarations: [ObjectGroupsComponent, ObjectItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TelegramIntegrationModule
  ]
})
export class ObjectGroupsModule { }
