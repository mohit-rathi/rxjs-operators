import { Component } from '@angular/core';

// interfaces
import { ILink } from 'src/app/interfaces/link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  operatorList: ILink[] = [
    {
      title: 'Of',
      href: '/of',
    },
    {
      title: 'From',
      href: '/from',
    },
    {
      title: 'Tap',
      href: '/tap',
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
      title: 'Concat',
      href: '/concat',
    },
    {
      title: 'Merge',
      href: '/merge',
    },
    {
      title: 'Merge Map',
      href: '/merge-map',
    },
    {
      title: 'Concat Map',
      href: '/concat-map',
    },
    {
      title: 'Switch Map',
      href: '/switch-map',
    },
    {
      title: 'Zip',
      href: '/zip',
    },
    {
      title: 'Fork Join',
      href: '/fork-join',
    },
  ];
}
