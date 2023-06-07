import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
  public exOnePartOneArr: any[] = [];
  public exOnePartTwoArr: string[] = [];

  public exTwoArr: string[] = [];

  public exThreeArr: string[] = [];

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

    // Example - 02 | Map + MergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe({
        next: (res) => {
          this.exTwoArr.push(res);
        },
      });

    // Example - 03 | MergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe({
      next: (res) => {
        this.exThreeArr.push(res);
      },
    });
  }

  public getData(data: string) {
    return of(`${data} Video Uploaded`);
  }
}
