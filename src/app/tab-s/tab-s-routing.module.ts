import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSPage } from './tab-s.page';

const routes: Routes = [
  {
    path: '',
    component: TabSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSPageRoutingModule {}
