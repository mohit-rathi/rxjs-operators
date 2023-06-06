import { Component, OnInit } from '@angular/core';
import { interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  public arr: number[] = [];

  ngOnInit(): void {
    const obs1$ = interval(1000).pipe(take(3));
    const obs2$ = interval(1500).pipe(take(3));

    const merge$ = merge(obs1$, obs2$);

    merge$.subscribe({
      next: (data) => {
        this.arr.push(data);
      },
    });
  }
}
