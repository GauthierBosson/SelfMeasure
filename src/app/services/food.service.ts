import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  title = '',
  image_url = '',
  source_url = '',
  recipe_id = '',
  social_rank = '',
  publisher = ''
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'https://www.food2fork.com/api/search'; // Food2Fork API
  key = '22345bf2b97d6458fc968147c06b8d7e'; // <-- API key

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Get data from Food2Fork
   * map the result to return only the results that we need
   *
   * @param {string} title Search Term
   * @params {image_url}
   * @params {source_url}
   * @params {recipe_id}
   * @params {social_rank}
   * @params {publisher}
   * @returns Observable with the search results
   */
  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?key=${this.key}&q=${encodeURI(title)}`).pipe(
        map(results => results['Search'])
    );
  }

  /**
   * Get the detailed information for an ID using the "i" parameter
   *
   * @param {string} id Food2Fork to retrieve information
   * @returns Observable with detailed information
   */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.key}`);
  }
}
