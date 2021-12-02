import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImputPage } from './imput.page';

const routes: Routes = [
  {
    path: '',
    component: ImputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImputPageRoutingModule {}
