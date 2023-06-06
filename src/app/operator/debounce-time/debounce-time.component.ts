import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
  public text$ = new Subject<string>();
  public arr: string[] = [];

  ngOnInit(): void {
    this.text$.pipe(debounceTime(500)).subscribe({
      next: (data) => {
        this.arr.push(data);
      },
    });
  }

  public onModelChange(val: string) {
    this.text$.next(val);
  }
}
