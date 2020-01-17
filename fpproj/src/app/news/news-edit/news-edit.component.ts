import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fp-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  newsId: string;
  constructor(private route: ActivatedRoute) {
    this.newsId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
