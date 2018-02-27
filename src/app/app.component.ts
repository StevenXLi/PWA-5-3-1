import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('init => *', [
        // denies any animation from 'init' state
      ]),
      transition('main => add', [
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(100%)'
          }),
          { optional: true }),
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
          { optional: true })
      ]),
      transition('add => main', [
        query(':enter',
          style({
            position: 'fixed',
            height: '100%',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          { optional: true }),
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
          { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  public getRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['name'] || 'init';
  }
}
