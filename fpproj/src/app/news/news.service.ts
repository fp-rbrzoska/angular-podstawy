import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class NewsService {

  private newsSubj = new BehaviorSubject([]);
  news$ = this.newsSubj.asObservable();

  get latestNews() {
    return this.newsSubj.getValue();
  }

  constructor(private http: HttpClient) { }

  getNews() {
    this.http.get<any>(apiUrl + '/posts').subscribe(x => this.newsSubj.next(x));
  }
}
