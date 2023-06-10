import { Component } from '@angular/core';

// interfaces
import { ILink } from 'src/app/interfaces/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public routerLinkList: ILink[] = [
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
  ];
}
