import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSPage } from './tab-s.page';

const routes: Routes = [
  {
    path: '',
    component: TabSPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule )
      },
      {
        path: 'contact',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule )
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinite/infinite.module').then( m => m.InfinitePageModule )
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSPageRoutingModule {}
