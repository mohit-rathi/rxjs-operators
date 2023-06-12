import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnDestroy {
  // subject
  private sub$ = new Subject();

  // Example - 01
  private obs1$ = interval(1000);
  private takeUntil1$ = this.obs1$.pipe(takeUntil(this.sub$));
  private subscriptionOne!: Subscription;
  public arrOne: number[] = [];

  ngOnDestroy(): void {
    if (this.subscriptionOne) {
      this.subscriptionOne.unsubscribe();
    }
  }

  // Example - 01
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.takeUntil1$.subscribe({
      next: (res) => {
        this.arrOne.push(res);
      },
    });
  }

  // Example - 01
  public unsubscribeOne(): void {
    if (this.subscriptionOne) {
      this.arrOne.splice(0, this.arrOne.length);
      this.subscriptionOne.unsubscribe();
    }
  }

  // Example - 01
  stop() {
    this.sub$.next(0);
  }
}
