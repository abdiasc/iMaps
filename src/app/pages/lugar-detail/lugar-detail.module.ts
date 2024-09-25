import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarDetailPageRoutingModule } from './lugar-detail-routing.module';

import { LugarDetailPage } from './lugar-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarDetailPageRoutingModule
  ],
  declarations: [LugarDetailPage]
})
export class LugarDetailPageModule {}
