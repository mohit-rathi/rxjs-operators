import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  mapOneArr: number[] = [];
  mapTwoArr: string[] = [];

  ngOnInit(): void {
    const obs1$ = of(1, 2, 3, 4, 5);
    const map1$ = obs1$.pipe(
      map((x) => {
        return x * 10;
      })
    );

    const obs2$ = of(
      'John Doe',
      'Bruce Wayne',
      'Tony Stark',
      'Tom Cruise',
      'Sam Witwicky'
    );
    const map2$ = obs2$.pipe(
      map((x) => {
        const [first, last] = x.split(' ');
        return first.charAt(0) + last.charAt(0);
      })
    );

    map1$.subscribe({
      next: (data) => {
        this.mapOneArr.push(data);
      },
    });

    map2$.subscribe({
      next: (data) => {
        this.mapTwoArr.push(data);
      },
    });
  }
}
