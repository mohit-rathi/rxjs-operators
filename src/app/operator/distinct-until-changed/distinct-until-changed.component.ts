import { Component, OnDestroy } from '@angular/core';
import { Subscription, distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent implements OnDestroy {
  // Example - 01
  private obs1$ = from([1, 1, 2, 2, 3, 3, 1]);
  private duc1$ = this.obs1$.pipe(distinctUntilChanged());
  private subscriptionOne!: Subscription;
  public arrOne: number[] = [];

  // Example - 02
  private obs2$ = from([
    { name: 'John' },
    { name: 'John' },
    { name: 'Sam' },
    { name: 'Bruce' },
    { name: 'Bruce' },
    { name: 'John' },
  ]);
  private duc2$ = this.obs2$.pipe(
    distinctUntilChanged((prev, curr) => prev.name === curr.name)
  );
  private subscriptionTwo!: Subscription;
  public arrTwo: { name: string }[] = [];

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
    this.subscriptionOne = this.duc1$.subscribe({
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

  // Example - 02
  public subscribeTwo(): void {
    this.unsubscribeTwo();
    this.subscriptionTwo = this.duc2$.subscribe({
      next: (res) => {
        this.arrTwo.push(res);
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
