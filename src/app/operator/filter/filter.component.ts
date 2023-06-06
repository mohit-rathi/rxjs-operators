import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterOneArr: number[] = [];
  filterTwoArr: number[] = [];
  filterThreeArr: { age: number }[] = [];

  ngOnInit(): void {
    const obs1$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filter1$ = obs1$.pipe(
      filter((x) => {
        return x % 2 === 0;
      })
    );

    const obs2$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filter2$ = obs2$.pipe(
      filter((x) => {
        return x % 2 === 1;
      })
    );

    const obs3$ = from([
      { age: 25 },
      { age: 42 },
      { age: 36 },
      { age: 27 },
      { age: 51 },
    ]);
    const filter3$ = obs3$.pipe(
      filter((x) => {
        return x.age > 30;
      })
    );

    filter1$.subscribe({
      next: (res) => {
        this.filterOneArr.push(res);
      },
    });

    filter2$.subscribe({
      next: (res) => {
        this.filterTwoArr.push(res);
      },
    });

    filter3$.subscribe({
      next: (res) => {
        this.filterThreeArr.push(res);
      },
    });
  }
}
