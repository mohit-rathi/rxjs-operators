import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, of, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnDestroy {
  // Example - 01
  private obs1$ = of(1, 2, 3, 4, 5);
  private obs2$ = of('John', 'Bruce', 'Peter', 'Tony', 'Sam');
  private zip1$ = zip(this.obs1$, this.obs2$);
  private subscriptionOne!: Subscription;
  public arrOne: [number, string][] = [];

  // Example - 02
  private obs3$ = interval(1000).pipe(take(5));
  private obs4$ = interval(2000).pipe(take(5));
  private zip2$ = zip(this.obs3$, this.obs4$);
  private subscriptionTwo!: Subscription;
  public arrTwo: [number, number][] = [];

  // Example - 01
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.zip1$.subscribe({
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
    this.subscriptionTwo = this.zip2$.subscribe({
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

  ngOnDestroy(): void {
    if (this.subscriptionOne) {
      this.subscriptionOne.unsubscribe();
    }
    if (this.subscriptionTwo) {
      this.subscriptionTwo.unsubscribe();
    }
  }
}
