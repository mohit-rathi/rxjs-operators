import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { TapComponent } from './tap/tap.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ConcatWithComponent } from './concat-with/concat-with.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@NgModule({
  declarations: [
    OfComponent,
    FromComponent,
    TapComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    ConcatWithComponent,
    MergeComponent,
    MergeMapComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    OfComponent,
    FromComponent,
    TapComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    ConcatWithComponent,
    MergeComponent,
    MergeMapComponent,
  ],
})
export class OperatorModule {}
