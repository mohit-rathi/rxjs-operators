import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
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

    // Example - 02 | Map + SwitchAll
    source
      .pipe(
        map((res) => this.getData(res)),
        switchAll()
      )
      .subscribe({
        next: (res) => {
          this.exTwoArr.push(res);
        },
      });

    // Example - 03 | SwitchMap
    source.pipe(switchMap((res) => this.getData(res))).subscribe({
      next: (res) => {
        this.exThreeArr.push(res);
      },
    });
  }

  public getData(data: string) {
    return of(`${data} Video Uploaded`).pipe(delay(1000));
  }
}
