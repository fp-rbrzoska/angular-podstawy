import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'fp-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news$ = this.newsService.news$;
  // news: any[];
  constructor(private newsService: NewsService) {

    this.newsService.getNews();
    // this.newsService.getNews().subscribe(x => this.news = x);
  }

  ngOnInit() {
  }

}
