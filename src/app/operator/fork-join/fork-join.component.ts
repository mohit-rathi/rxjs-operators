import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit {
  public nameArr: string[] = [];
  public colorArr: string[] = [];
  public forkArr!: [string, string];

  ngOnInit(): void {
    const name$ = of('John', 'Bruce', 'Tony', 'Sam', 'Peter');
    const color$ = of('Blue', 'Yellow', 'Pink', 'Green', 'Orange');

    name$.subscribe({
      next: (res) => {
        this.nameArr.push(res);
      },
    });

    color$.subscribe({
      next: (res) => {
        this.colorArr.push(res);
      },
    });

    forkJoin([name$, color$]).subscribe({
      next: (res) => {
        this.forkArr = res;
      },
    });
  }
}
