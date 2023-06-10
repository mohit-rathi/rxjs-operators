import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnDestroy {
  // Example - 01
  public arrOne: number[] = [];
  private obs1$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  private take1$ = this.obs1$.pipe(take(5));
  private subscriptionOne!: Subscription;

  // Example - 02
  public arrTwo: number[] = [];
  private obs2$ = interval(1000);
  private take2$ = this.obs2$.pipe(take(5));
  private subscriptionTwo!: Subscription;

  ngOnDestroy(): void {
    if (this.subscriptionOne) {
      this.subscriptionOne.unsubscribe();
    }
    if (this.subscriptionTwo) {
      this.subscriptionTwo.unsubscribe();
    }
  }

  // Example - 01
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.take1$.subscribe({
      next: (data) => {
        this.arrOne.push(data);
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

  // Example - 02
  public subscribeTwo(): void {
    this.unsubscribeTwo();
    this.subscriptionTwo = this.take2$.subscribe({
      next: (data) => {
        this.arrTwo.push(data);
      },
    });
  }

  // Example - 02
  public unsubscribeTwo(): void {
    if (this.subscriptionTwo) {
      this.arrTwo.splice(0, this.arrTwo.length);
      this.subscriptionTwo.unsubscribe();
    }
  }
}
