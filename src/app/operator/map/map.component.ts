import { Component, OnDestroy } from '@angular/core';
import { Subscription, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnDestroy {
  // Example - 01
  public arrOne: number[] = [];
  private obs1$ = of(1, 2, 3, 4, 5);
  private map1$ = this.obs1$.pipe(map((x) => x * 10));
  private subscriptionOne!: Subscription;

  // Example - 02
  public arrTwo: string[] = [];
  private obs2$ = of('John', 'Bruce', 'Peter', 'Tony', 'Sam');
  private map2$ = this.obs2$.pipe(map((x) => x.charAt(0)));
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
    this.subscriptionOne = this.map1$.subscribe({
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
    this.subscriptionTwo = this.map2$.subscribe({
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
