import { Component, OnInit } from '@angular/core';
import { concatWith, of } from 'rxjs';

@Component({
  selector: 'app-concat-with',
  templateUrl: './concat-with.component.html',
  styleUrls: ['./concat-with.component.scss'],
})
export class ConcatWithComponent implements OnInit {
  public arr: number[] = [];

  ngOnInit(): void {
    const obs1$ = of(1, 3, 5, 7, 9);
    const obs2$ = of(2, 4, 6, 8);

    const concat$ = obs1$.pipe(concatWith(obs2$));

    concat$.subscribe({
      next: (data) => {
        this.arr.push(data);
      },
    });
  }
}
