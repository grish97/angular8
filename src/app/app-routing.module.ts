import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {BlogComponent} from './components/pages/blog/blog.component';


const renderComponent = (Component: any, isLayout?: boolean) => {
  console.log(isLayout);
  return Component;
};


const routes: Routes = [
  {
    path: ``,
    component: renderComponent(HomeComponent, true)
  },
  {
    path: `blog`,
    component: BlogComponent
  },
  {
    path: `our-team`,
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
