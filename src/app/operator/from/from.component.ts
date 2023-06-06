import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {
  obsOneArr: number[] = [];
  obsTwoArr: string[] = [];
  obsThreeArr: string[] = [];
  obsFourString!: string;

  ngOnInit(): void {
    const obs1$ = from([1, 2, 3]);
    const obs2$ = from(['John', 'Bruce', 'Peter']);
    const obs3$ = from('ABC');
    const obs4$ = from(new Promise((resolve) => resolve('Promise Resolved')));

    obs1$.subscribe({
      next: (data) => {
        this.obsOneArr.push(data);
      },
    });

    obs2$.subscribe({
      next: (data) => {
        this.obsTwoArr.push(data);
      },
    });

    obs3$.subscribe({
      next: (data) => {
        this.obsThreeArr.push(data);
      },
    });

    obs4$.subscribe({
      next: (data) => {
        this.obsFourString = <string>data;
      },
    });
  }
}
