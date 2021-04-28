import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TelegramIntegrationComponent } from './telegram-integration.component'
import { TelegramItemComponent } from './telegram-item/telegram-item.component'


@NgModule({
  declarations: [TelegramIntegrationComponent, TelegramItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class TelegramIntegrationModule { }
