import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent implements OnInit {
  public distinctOneArr: number[] = [];
  public distinctTwoArr: { name: string }[] = [];

  ngOnInit(): void {
    const obs1$ = from([1, 1, 2, 2, 3, 3, 1]);
    const distinct1$ = obs1$.pipe(distinctUntilChanged());

    const obs2$ = from([
      { name: 'John' },
      { name: 'John' },
      { name: 'Sam' },
      { name: 'Bruce' },
      { name: 'Bruce' },
      { name: 'John' },
    ]);
    const distinct2$ = obs2$.pipe(
      distinctUntilChanged((prev, curr) => prev.name === curr.name)
    );

    distinct1$.subscribe({
      next: (data) => {
        this.distinctOneArr.push(data);
      },
    });

    distinct2$.subscribe({
      next: (data) => {
        this.distinctTwoArr.push(data);
      },
    });
  }
}
