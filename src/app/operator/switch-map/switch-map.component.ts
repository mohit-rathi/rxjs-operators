import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, delay, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnDestroy {
  // Example - 01
  private obs1$ = of('Tech', 'Blog', 'News');

  // Map
  private subscriptionOne!: Subscription;
  public arrOne: any[] = [];

  // Map + SwitchAll
  private subscriptionTwo!: Subscription;
  public arrTwo: string[] = [];

  // SwitchMap
  private subscriptionThree!: Subscription;
  public arrThree: string[] = [];

  // Example - 02
  private breed$ = of('hound', 'mastiff', 'retriever');

  // Map
  private subscriptionFour!: Subscription;
  public arrFour: any[] = [];

  // Map + SwitchAll
  private subscriptionFive!: Subscription;
  public arrFive: any[] = [];

  // SwitchMap
  private subscriptionSix!: Subscription;
  public arrSix: any[] = [];

  constructor(private _http: HttpClient) {}

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
    if (this.subscriptionFive) {
      this.subscriptionFive.unsubscribe();
    }
    if (this.subscriptionSix) {
      this.subscriptionSix.unsubscribe();
    }
  }

  // Example - 01 | Map
  public subscribeOne(): void {
    this.unsubscribeOne();
    this.subscriptionOne = this.obs1$
      .pipe(
        map((res) => {
          return this.getData(res);
        })
      )
      .subscribe({
        next: (res) => {
          this.arrOne.push(res);
        },
      });
  }

  // Example - 01 | Map
  public unsubscribeOne(): void {
    if (this.subscriptionOne) {
      this.arrOne.splice(0, this.arrOne.length);
      this.subscriptionOne.unsubscribe();
    }
  }

  // Example - 01 | Map + SwitchAll
  public subscribeTwo(): void {
    this.unsubscribeTwo();
    this.subscriptionTwo = this.obs1$
      .pipe(
        map((res) => {
          return this.getData(res);
        }),
        switchAll()
      )
      .subscribe({
        next: (res) => {
          this.arrTwo.push(res);
        },
      });
  }

  // Example - 01 | Map + SwitchAll
  public unsubscribeTwo(): void {
    if (this.subscriptionTwo) {
      this.arrTwo.splice(0, this.arrTwo.length);
      this.subscriptionTwo.unsubscribe();
    }
  }

  // Example - 01 | SwitchMap
  public subscribeThree(): void {
    this.unsubscribeThree();
    this.subscriptionThree = this.obs1$
      .pipe(
        switchMap((res) => {
          return this.getData(res);
        })
      )
      .subscribe({
        next: (res) => {
          this.arrThree.push(res);
        },
      });
  }

  // Example - 01 | SwitchMap
  public unsubscribeThree(): void {
    if (this.subscriptionThree) {
      this.arrThree.splice(0, this.arrThree.length);
      this.subscriptionThree.unsubscribe();
    }
  }

  // Example - 01
  public getData(data: string) {
    return of(`${data} Video Uploaded`).pipe(delay(2000));
  }

  // Example - 02 | Map
  public subscribeFour(): void {
    this.unsubscribeFour();
    this.subscriptionFour = this.breed$
      .pipe(
        map((res) => {
          return this.getBreed(res);
        })
      )
      .subscribe({
        next: (res) => {
          this.arrFour.push(res);
        },
      });
  }

  // Example - 02 | Map
  public unsubscribeFour(): void {
    if (this.subscriptionFour) {
      this.arrFour.splice(0, this.arrFour.length);
      this.subscriptionFour.unsubscribe();
    }
  }

  // Example - 02 | Map + SwitchAll
  public subscribeFive(): void {
    this.unsubscribeFive();
    this.subscriptionFive = this.breed$
      .pipe(
        map((res) => {
          return this.getBreed(res);
        }),
        switchAll()
      )
      .subscribe({
        next: (res) => {
          this.arrFive.push(res);
        },
      });
  }

  // Example - 02 | Map + SwitchAll
  public unsubscribeFive(): void {
    if (this.subscriptionFive) {
      this.arrFive.splice(0, this.arrFive.length);
      this.subscriptionFive.unsubscribe();
    }
  }

  // Example - 02 | SwitchMap
  public subscribeSix(): void {
    this.unsubscribeSix();
    this.subscriptionSix = this.breed$
      .pipe(
        switchMap((res) => {
          return this.getBreed(res);
        })
      )
      .subscribe({
        next: (res) => {
          this.arrSix.push(res);
        },
      });
  }

  // Example - 02 | SwitchMap
  public unsubscribeSix(): void {
    if (this.subscriptionSix) {
      this.arrSix.splice(0, this.arrSix.length);
      this.subscriptionSix.unsubscribe();
    }
  }

  // Example - 02
  public getBreed(breed: string) {
    const url = `https://dog.ceo/api/breed/${breed}/list`;
    return this._http.get<any>(url);
  }
}
