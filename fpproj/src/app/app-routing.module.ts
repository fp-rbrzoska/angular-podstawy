import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestModule } from './test/test.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'news',
  loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
