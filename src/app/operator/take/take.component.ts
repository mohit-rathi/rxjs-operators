import { Component, OnInit } from '@angular/core';
import { of, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  takeOneArr: number[] = [];
  ngOnInit(): void {
    const obs1$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const take1$ = obs1$.pipe(take(5));

    take1$.subscribe({
      next: (data) => {
        this.takeOneArr.push(data);
      },
    });
  }
}
