import { Injectable } from '@angular/core';
import { NewsAnswer } from '../interfaces/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiURL = environment.apiURL;

let headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  callAPI<T>(query: string) {
    query = apiURL + query;
    return this.http.get<T>(query, {headers: headers});
  }

  getNews() {
    //Link de API
    //return this.http.get<NewsAnswer>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7e825eea0c00400b81f28a4458bab362`);
    return this.callAPI<NewsAnswer>(`top-headlines?country=us`);
  }

  getNewsPerCategory(category: string) {
    //return this.http.get<NewsAnswer>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7e825eea0c00400b81f28a4458bab362`);
    return this.callAPI<NewsAnswer>(`top-headlines?country=us&category=${category}`);
  }
}
