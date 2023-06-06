import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  obsOneArr: number[] = [];
  obsTwoArr: string[] = [];
  obsThreeObj!: { a: string; b: string; c: string };
  obsFourArr!: string[];

  ngOnInit(): void {
    const obs1$ = of(1, 2, 3);
    const obs2$ = of('John', 'Bruce', 'Peter');
    const obs3$ = of({ a: 'John', b: 'Bruce', c: 'Peter' });
    const obs4$ = of(['John', 'Bruce', 'Peter']);

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
        this.obsThreeObj = data;
      },
    });

    obs4$.subscribe({
      next: (data) => {
        this.obsFourArr = data;
      },
    });
  }
}
