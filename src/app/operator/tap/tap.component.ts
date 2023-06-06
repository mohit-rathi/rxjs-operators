import { Component, OnInit } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  public tapArr: number[] = [];
  public subArr: number[] = [];

  ngOnInit(): void {
    const obs1$ = of([1, 2, 3, 4, 5]);

    obs1$
      .pipe(
        tap((data) => {
          this.tapArr = data;
        })
      )
      .subscribe({
        next: (data) => {
          this.subArr = data;
        },
      });
  }
}
