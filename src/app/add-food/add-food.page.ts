import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';

  /**
   * Constructor of our first page
   * @param foodService
   */

  constructor(private foodService: FoodService) {}

  ngOnInit() {}

  searchChanged() {
    // Call our function which returns an Observable
    this.results = this.foodService.searchData(this.searchTerm);
  }

}
