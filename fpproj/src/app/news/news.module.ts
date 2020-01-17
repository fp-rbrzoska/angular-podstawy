import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';

export const CONFIG = { a: 1 };


@NgModule({
  declarations: [NewsListComponent, NewsItemComponent, NewsEditComponent, NewsFormComponent, NewsAddComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [NewsService]
})
export class NewsModule { }
