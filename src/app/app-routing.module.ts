import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { OfComponent } from './operator/of/of.component';
import { FromComponent } from './operator/from/from.component';
import { MapComponent } from './operator/map/map.component';
import { FilterComponent } from './operator/filter/filter.component';
import { TakeComponent } from './operator/take/take.component';
import { TakeUntilComponent } from './operator/take-until/take-until.component';
import { DebounceTimeComponent } from './operator/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './operator/distinct-until-changed/distinct-until-changed.component';
import { ConcatWithComponent } from './operator/concat-with/concat-with.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'of',
    pathMatch: 'full',
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
    path: 'concat-with',
    component: ConcatWithComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
