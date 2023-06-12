import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './operator/dashboard/dashboard.component';
import { OfComponent } from './operator/of/of.component';
import { FromComponent } from './operator/from/from.component';
import { TapComponent } from './operator/tap/tap.component';
import { MapComponent } from './operator/map/map.component';
import { FilterComponent } from './operator/filter/filter.component';
import { TakeComponent } from './operator/take/take.component';
import { TakeUntilComponent } from './operator/take-until/take-until.component';
import { DebounceTimeComponent } from './operator/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './operator/distinct-until-changed/distinct-until-changed.component';
import { ConcatComponent } from './operator/concat/concat.component';
import { MergeComponent } from './operator/merge/merge.component';
import { MergeMapComponent } from './operator/merge-map/merge-map.component';
import { ConcatMapComponent } from './operator/concat-map/concat-map.component';
import { SwitchMapComponent } from './operator/switch-map/switch-map.component';
import { ZipComponent } from './operator/zip/zip.component';
import { ForkJoinComponent } from './operator/fork-join/fork-join.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'of',
    component: OfComponent,
  },
  {
    path: 'from',
    component: FromComponent,
  },
  {
    path: 'tap',
    component: TapComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'take',
    component: TakeComponent,
  },
  {
    path: 'take-until',
    component: TakeUntilComponent,
  },
  {
    path: 'debounce-time',
    component: DebounceTimeComponent,
  },
  {
    path: 'distinct-until-changed',
    component: DistinctUntilChangedComponent,
  },
  {
    path: 'concat',
    component: ConcatComponent,
  },
  {
    path: 'merge',
    component: MergeComponent,
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent,
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent,
  },
  {
    path: 'zip',
    component: ZipComponent,
  },
  {
    path: 'fork-join',
    component: ForkJoinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
