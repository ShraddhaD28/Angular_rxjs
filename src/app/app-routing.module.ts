import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { DebouceComponent } from './debouce/debouce.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { PromiseComponent } from './promise/promise.component';
import { SpreadComponent } from './spread/spread.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes =[
  {path:'from-event',component:FromEventComponent},
  {path:'map',component:MapComponent},
  {path:'timer',component:IntervalComponent},
  {path:'to-array',component:ToArrayComponent},
  {path:'subject',component:SubjectComponent},
  {path:'tap',component:TapComponent},
  {path:'promise',component:PromiseComponent},
  {path:'debounce',component:DebouceComponent},
  {path:'concat',component:ConcatComponent},
  {path:'merge-map',component:MergeMapComponent},
  {path:'concat-map',component:ConcatMapComponent},
  {path:'switch-map',component:SwitchMapComponent},
  {path:'exhaust-map',component:ExhaustMapComponent},
  {path:'combine-latest',component:CombineLatestComponent},
  {path:'spread',component:SpreadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
