import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      title: '3000Kcal',
      subtitle: 'Votre objectif',
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
