import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSPageRoutingModule } from './tab-s-routing.module';

import { TabSPage } from './tab-s.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSPageRoutingModule, ComponentsModule
  ],
  declarations: [TabSPage]
})
export class TabSPageModule {}
