import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionComponent } from './auction.component';




@NgModule({
  declarations: [AuctionComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class AuctionModule { }
