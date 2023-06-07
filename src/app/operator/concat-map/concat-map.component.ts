import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent {
  public exOnePartOneArr: any[] = [];
  public exOnePartTwoArr: string[] = [];

  public exTwoArr: string[] = [];

  public exThreeArr: string[] = [];

  public exFourArr: string[] = [];

  ngOnInit(): void {
    const source = from(['Tech', 'Blog', 'News']);

    // Example - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe({
      next: (res) => {
        this.exOnePartOneArr.push(res);
        res.subscribe({
          next: (res) => {
            this.exOnePartTwoArr.push(res);
          },
        });
      },
    });

    // Example - 02 | Map + ConcatAll
    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe({
        next: (res) => {
          this.exTwoArr.push(res);
        },
      });

    // Example - 03 | ConcatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe({
      next: (res) => {
        this.exThreeArr.push(res);
      },
    });

    // Example - 04 | MergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe({
      next: (res) => {
        this.exFourArr.push(res);
      },
    });
  }

  public getData(data: string) {
    return of(`${data} Video Uploaded`).pipe(delay(2000));
  }
}
