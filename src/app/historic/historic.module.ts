import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoricPage } from './historic.page';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: HistoricPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatCardModule
  ],
  declarations: [HistoricPage]
})
export class HistoricPageModule {}
