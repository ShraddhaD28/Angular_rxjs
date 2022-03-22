import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapComponent } from './map/map.component';
import { IntervalComponent } from './interval/interval.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { SubjectComponent } from './subject/subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TapComponent } from './tap/tap.component';
import { PromiseComponent } from './promise/promise.component';
import { DebouceComponent } from './debouce/debouce.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SpreadComponent } from './spread/spread.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    MapComponent,
    IntervalComponent,
    ToArrayComponent,
    SubjectComponent,
    TapComponent,
    PromiseComponent,
    DebouceComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    CombineLatestComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
