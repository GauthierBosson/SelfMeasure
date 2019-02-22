import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { Chart } from 'chart.js';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {

  @ViewChild('chartCanvas') chartCanvas;
  @ViewChild('chartCanvas2') chartCanvas2;

  barChart: any;
  barChart2: any;
  weight: any;
  date: any;
  values: any[];
  dates: any[];

  constructor(public router: Router, private helper: JwtHelperService, private http: HttpClient) {

  }

  async getWeightAndDate() {
    const rawToken = await this.helper.tokenGetter();
    const token = jwt_decode(rawToken);
    const header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${rawToken}`
    });
    this.http.get(`http://localhost:8000/api/users/${token.id}`, {headers: header}).subscribe(
      (data: any) => {
        this.weight = data.weights as any;
        this.date = data.weights as any;
        const values = [];
        const dates = [];
        for (let i = 0; i < this.weight.length; i++) {
          values.push(this.weight[i].value);
        }

        for (let i = 0; i < this.weight.length; i++) {
          dates.push(this.weight[i].date.slice(0, 10));
        }
        console.log(values);
        console.log(dates);
        this.values = values;
        this.dates = dates;
        console.log(this.values);
        console.log(this.dates);
        this.ionViewDidLoad(this.values, this.dates);
      }
    );
  }

  ionViewDidLoad(weights: any, dates: any) {

    this.barChart = new Chart(this.chartCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Poids en kg',
          data: weights,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.barChart2 = new Chart(this.chartCanvas2.nativeElement, {

      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
    // this.ionViewDidLoad();
    this.getWeightAndDate();
  }

}
