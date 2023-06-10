import { Component, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnDestroy {
  // Example - 01
  public arrOne: number[] = [];
  private obs1$ = from([1, 2, 3]);
  private subscriptionOne!: Subscription;

  // Example - 02
  public arrTwo: string[] = [];
  private obs2$ = from(['John', 'Bruce', 'Peter']);
  private subscriptionTwo!: Subscription;

  // Example - 03
  public arrThree: string[] = [];
  private obs3$ = from('ABC');
  private subscriptionThree!: Subscription;

  // Example - 04
  public arrFour: any[] = [];
  private obs4$ = from(new Promise((resolve) => resolve('Promise Resolved')));
  private subscriptionFour!: Subscription;

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
    if (this.subscriptionFour) {
      this.subscriptionFour.unsubscribe();
    }
  }

  // Example - 01
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.obs1$.subscribe({
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
    this.subscriptionTwo = this.obs2$.subscribe({
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
    this.subscriptionThree = this.obs3$.subscribe({
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

  // Example - 04
  public subscribeFour(): void {
    this.unsubscribeFour();
    this.subscriptionFour = this.obs4$.subscribe({
      next: (data) => {
        this.arrFour.push(data);
      },
    });
  }

  // Example - 04
  public unsubscribeFour(): void {
    if (this.subscriptionFour) {
      this.arrFour.splice(0, this.arrFour.length);
      this.subscriptionFour.unsubscribe();
    }
  }
}
