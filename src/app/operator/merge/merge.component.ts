import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnDestroy {
  // Example - 01
  private obs1$ = interval(1000).pipe(take(5));
  private obs2$ = interval(1500).pipe(take(5));
  private mrg1$ = merge(this.obs1$, this.obs2$);
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
    this.subscriptionOne = this.mrg1$.subscribe({
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
}
