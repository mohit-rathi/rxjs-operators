import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements AfterViewInit {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  public nameList: string[] = ['John', 'Bruce', 'Tony', 'Sam', 'Peter'];
  public colorList: string[] = ['blue', 'yellow', 'pink', 'green', 'orange'];

  public boxList: { content: string; class: string }[] = [];

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    // Example - 01 | Zip
    zip(nameObs, colorObs).subscribe({
      next: ([name, color]) => {
        // console.log(name, color);
        // this.createBox(name, color, 'elContainer');
        this.boxList.push({ content: name, class: color });
      },
    });
  }

  // public createBox(name: string, color: string, containerId: string) {
  //   const el = document.createElement('div');
  //   el.innerText = name;
  //   el.setAttribute('class', color);
  //   document.getElementById(containerId)?.appendChild(el);
  // }
}
