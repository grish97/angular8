import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const animationPage =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: `relative` }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        animate('200ms ease-out', style({ right: '100%'}))
      ], { optional: true })
    ])
  ]);
