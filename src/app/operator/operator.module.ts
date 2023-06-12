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
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ZipComponent } from './zip/zip.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

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
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ZipComponent,
    ForkJoinComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class OperatorModule {}
