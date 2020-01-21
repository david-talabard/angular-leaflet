import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';

const COMPONENTS = [
  MapComponent
];

@NgModule({
  imports: [],
  providers: [],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS
  ]
})
export class LeafletMapModule { }
