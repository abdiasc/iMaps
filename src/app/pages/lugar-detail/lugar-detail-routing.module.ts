import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarDetailPage } from './lugar-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LugarDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarDetailPageRoutingModule {}
