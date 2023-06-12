import { Component, OnDestroy } from '@angular/core';
import { Subscription, filter, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnDestroy {
  // Example - 01
  private obs1$ = of(1, 2, 3, 4, 5);
  private tap1$ = this.obs1$.pipe(
    tap((res) => {
      this.arrOne.push(`From tap: ${res}`);
    })
  );
  private subscriptionOne!: Subscription;
  public arrOne: string[] = [];

  // Example - 02
  private obs2$ = of(1, 2, 3, 4, 5);
  private tap2$ = this.obs2$.pipe(
    tap((x) => {
      if (x % 2 === 0) {
        this.arrTwo.push(`From tap: ${x}`);
      }
    }),
    filter((x) => x % 2 === 1)
  );
  private subscriptionTwo!: Subscription;
  public arrTwo: string[] = [];

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
    this.subscriptionOne = this.tap1$.subscribe();
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
    this.subscriptionTwo = this.tap2$.subscribe({
      next: (res) => {
        this.arrTwo.push(`From sub: ${res}`);
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
