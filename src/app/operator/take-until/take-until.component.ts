import { Component, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit {
  sub$ = new Subject();

  takeUntilOneArr: number[] = [];

  ngOnInit(): void {
    const obs1$ = interval(1000);
    const takeUntil1$ = obs1$.pipe(takeUntil(this.sub$));

    takeUntil1$.subscribe({
      next: (data) => {
        this.takeUntilOneArr.push(data);
      },
    });
  }

  stop() {
    this.sub$.next(0);
  }
}
