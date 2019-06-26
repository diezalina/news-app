import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../services/news.service';
import { Article } from '../interfaces/interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
@ViewChild(IonSegment) segment;
articlesArr: Article[] = [];

categories: string[] = [
  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
];
  constructor(private newsServ: NewsService) {}

  ngOnInit() {
    this.segment.value = this.categories[0];
    this.setNews(this.segment.value);
  }

  setNews(category: string) {
    this.newsServ.getNewsPerCategory(category).subscribe(news => {
      this.articlesArr.push(...news.articles);
    });
  }

  setCategory(value: string) {
    this.articlesArr = [];
    this.setNews(value);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.target.complete();
    }, 500);
  }

}
