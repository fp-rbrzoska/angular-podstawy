import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsAddComponent } from './news-add/news-add.component';

const routes: Routes = [
  { path: '' , component: NewsListComponent},
  { path: 'add' , component: NewsAddComponent},
  { path: ':id/edit' , component: NewsEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
