import { Component, OnDestroy } from '@angular/core';
import { Subscription, filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnDestroy {
  // Example - 01
  public arrOne: number[] = [];
  private obs1$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  private filter1$ = this.obs1$.pipe(filter((x) => x % 2 === 0));
  private subscriptionOne!: Subscription;

  // Example - 02
  public arrTwo: number[] = [];
  private obs2$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  private filter2$ = this.obs2$.pipe(filter((x) => x % 2 === 1));
  private subscriptionTwo!: Subscription;

  // Example - 03
  public arrThree: any[] = [];
  private obs3$ = from([
    { age: 25 },
    { age: 42 },
    { age: 36 },
    { age: 27 },
    { age: 51 },
  ]);
  private filter3$ = this.obs3$.pipe(filter((x) => x.age > 30));
  private subscriptionThree!: Subscription;

  ngOnDestroy(): void {
    if (this.subscriptionOne) {
      this.subscriptionOne.unsubscribe();
    }
    if (this.subscriptionTwo) {
      this.subscriptionTwo.unsubscribe();
    }
    if (this.subscriptionThree) {
      this.subscriptionThree.unsubscribe();
    }
  }

  // Example - 01
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.filter1$.subscribe({
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
    this.subscriptionTwo = this.filter2$.subscribe({
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

  // Example - 03
  public subscribeThree(): void {
    this.unsubscribeThree();
    this.subscriptionThree = this.filter3$.subscribe({
      next: (data) => {
        this.arrThree.push(data);
      },
    });
  }

  // Example - 03
  public unsubscribeThree(): void {
    if (this.subscriptionThree) {
      this.arrThree.splice(0, this.arrThree.length);
      this.subscriptionThree.unsubscribe();
    }
  }
}
