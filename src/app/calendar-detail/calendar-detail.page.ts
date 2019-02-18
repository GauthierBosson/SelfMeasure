import { Component } from '@angular/core';
import {forEach} from '@angular-devkit/schematics';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.page.html',
  styleUrls: ['./calendar-detail.page.scss'],
})
export class CalendarDetailPage {

  public meal: any;
  public kcal: any;
  public resume: string;
  public podometer: any;
  public kcalBurn: any;
  public total: any;

  constructor() {
    this.meal = [];
    this.kcal = [];
    this.meal[0] = 'frite';
    this.meal[1] = 'burger';
    this.meal[2] = 'glace au chocolat';
    this.kcal[0] = '20';
    this.kcal[1] = '40';
    this.kcal[2] = '15';
    this.podometer = 2000;
    this.kcalBurn = '70';
    this.resume = this.loopMealKcal(this.meal, this.kcal);
    this.total = this.totalKcal(this.kcal, this.kcalBurn);
  }
  loopMealKcal(meal, kcal) {
    let resum = '';
    for (let cpt = 0; cpt < meal.length; cpt++) {
      resum += '<p> Vous avez manger : ' + meal[cpt] + ' pour : ' + kcal[cpt] + ' kcal</p>';
    }
    return resum;
  }
  totalKcal(kcal, kcalBurn) {
    let nbr = 0;
    for (let i = 0; i < kcal.length; i++) {
      nbr += +kcal[i];
      console.log(nbr);
    }
    nbr -= +kcalBurn;
    return nbr;
  }
}
