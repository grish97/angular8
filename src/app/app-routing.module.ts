import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/pages/home/home.component';
import {BlogComponent} from './components/pages/blog/blog.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: ``,
    component: HomeComponent
  },
  {
    path: `blog`,
    component: BlogComponent
  },
  {
    path: `**`,
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
