import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegPersoInfosPage } from './reg-perso-infos.page';

const routes: Routes = [
  {
    path: '',
    component: RegPersoInfosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegPersoInfosPage]
})
export class RegPersoInfosPageModule {}
