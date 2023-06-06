import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routerLinkList = [
    {
      title: 'Of',
      href: '/of',
    },
    {
      title: 'From',
      href: '/from',
    },
    {
      title: 'Map',
      href: '/map',
    },
    {
      title: 'Filter',
      href: '/filter',
    },
    {
      title: 'Take',
      href: '/take',
    },
    {
      title: 'Take Until',
      href: '/take-until',
    },
    {
      title: 'Debounce Time',
      href: '/debounce-time',
    },
    {
      title: 'Distinct Until Changed',
      href: '/distinct-until-changed',
    },
    {
      title: 'Concat With',
      href: '/concat-with',
    },
  ];
}
