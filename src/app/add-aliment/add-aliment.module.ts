import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAlimentPage } from './add-aliment.page';
import { MatCardModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddAlimentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddAlimentPage]
})
export class AddAlimentPageModule {}
