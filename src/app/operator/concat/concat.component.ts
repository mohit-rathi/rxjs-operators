import { Component, OnDestroy } from '@angular/core';
import { Subscription, concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnDestroy {
  // Example - 01
  private obs1$ = of(0, 2, 4, 6, 8);
  private obs2$ = of(1, 3, 5, 7, 9);
  private con1$ = concat(this.obs1$, this.obs2$);
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
    this.subscriptionOne = this.con1$.subscribe({
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
