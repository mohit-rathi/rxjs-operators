import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ConcatWithComponent } from './concat-with/concat-with.component';

@NgModule({
  declarations: [
    OfComponent,
    FromComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    ConcatWithComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    OfComponent,
    FromComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    ConcatWithComponent,
  ],
})
export class OperatorModule {}
