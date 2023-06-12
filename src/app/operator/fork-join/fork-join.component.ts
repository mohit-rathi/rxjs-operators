import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnDestroy {
  // Example - 01
  private obs1$ = of(1, 2, 3, 4, 5, 6, 7);
  private obs2$ = of('John', 'Bruce', 'Peter', 'Tony');
  private fork1$ = forkJoin([this.obs1$, this.obs2$]);
  private subscriptionOne!: Subscription;
  public arrOne: [number, string][] = [];

  // Example - 02
  private obs3$ = interval(500).pipe(take(5));
  private obs4$ = interval(500).pipe(take(8));
  private fork2$ = forkJoin([this.obs3$, this.obs4$]);
  private subscriptionTwo!: Subscription;
  public arrTwo: [number, number][] = [];

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
    this.subscriptionOne = this.fork1$.subscribe({
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
    this.subscriptionTwo = this.fork2$.subscribe({
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
