import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationPage} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animationPage
  ]
})
export class AppComponent {
  title = 'angular';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
