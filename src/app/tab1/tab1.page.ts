import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
articlesArr: Article[] = [];

  constructor(private newsServ: NewsService) {}

  ngOnInit() {
    this.newsServ.getNews().subscribe(news => {
      this.articlesArr.push(...news.articles);
    });
  }

}
