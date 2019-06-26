import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-singular-news',
  templateUrl: './singular-news.component.html',
  styleUrls: ['./singular-news.component.scss'],
})
export class SingularNewsComponent implements OnInit {
@Input() articulo: Article;
  constructor() { }

  ngOnInit() {}

}
