import { Component } from '@angular/core';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {

  public day: any;
  public thisday: any;
  public dayOfWeekFistDay: any;
  public dayOfWeek: any;
  public date: any;
  public number: any;
  public calendar: any;
  public lastdayofmonth: any;
  public dayofmonth: any;
  // contructor
  constructor() {
    this.day = moment().format('l');
    this.date = this.day.split('/');
    this.number = toNumbers(this.date[1]);
    this.thisday = moment().format('dddd');

    this.calendar = '\n' +
        '  <div class="row no-gutters">\n' +
        '    <div class="col-2"></div>\n' +
        '    <div class="col-1 calendar">D</div>\n' +
        '    <div class="col-1 calendar">L</div>\n' +
        '    <div class="col-1 calendar">M</div>\n' +
        '    <div class="col-1 calendar">M</div>\n' +
        '    <div class="col-1 calendar">J</div>\n' +
        '    <div class="col-1 calendar">V</div>\n' +
        '    <div class="col-1 calendar">S</div>\n' +
        '    <div class="col-2"></div>\n' +
        '  </div>';
    this.lastdayofmonth = moment().endOf('month').fromNow();
    this.date = this.lastdayofmonth.split(' ');
    this.dayofmonth = toNumbers(this.date[1]);
    this.dayofmonth[0] += this.number[0];
    this.dayOfWeekFistDay = this.calendardayone(this.dayOfWeek, this.thisday, this.number[0]);
    this.calendarloop();
  }
  // création du calendrier graphique
  calendarloop(tmp = ' ') {
    let day = 1;
    for (let cpt = 0; cpt < 6; cpt++) {
      this.calendar += '<div class="row no-gutters"><div class="col-2"></div>';
      for (let i = 0; i < 7; i++) {
        if (this.dayOfWeekFistDay > 6) {
          this.dayOfWeekFistDay = 0;
        }
        if (day > this.dayofmonth[0]) {
          day++;
          this.dayOfWeekFistDay++;
          this.calendar += '<div class="col-1 calendar noday">' + tmp + '</div>';
        } else {
          if (i === this.dayOfWeekFistDay) {
            if (day === this.number[0]) {
              this.calendar += '<div class="col-1 calendar thisday">' + day + '</div>';
            } else {
              this.calendar += '<div class="col-1 calendar otherday">' + day + '</div>';
            }
            day++;
            this.dayOfWeekFistDay++;
          } else {
            this.calendar += '<div class="col-1 calendar noday">' + tmp + '</div>';
          }
        }
      }
      this.calendar += '<div class="col-2"></div></div>';
    }
  }
  // calcule du premier jour du mois
  calendardayone(day, theDay, number) {
    let dayOne;
    let first;
    day = this.selectday(theDay);
    first = number % 7 + 1;
    if (first === 1) {
      dayOne = day - 1;
    } else {
      dayOne = first + day - 1;
      if ( dayOne > 6) {
        dayOne = 7 - dayOne % 7 - 1;
      }
    }
    return dayOne;
  }
  // selection du jour de la semaine
  selectday(day: any) {
    let nbr;
    switch (day) {
      case 'Sunday' :
        nbr = 0;
        break;
      case 'Monday' :
        nbr = 1;
        break;
      case 'Tuesday' :
        nbr = 2;
        break;
      case 'Wednesday' :
        nbr = 3;
        break;
      case 'Thursday':
        nbr = 4;
        break;
      case 'Friday' :
        nbr = 5;
        break;
      case 'Saturday' :
        nbr = 6;
        break;
    }
    return nbr;
  }


}
