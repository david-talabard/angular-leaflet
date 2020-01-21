import { NgModule } from '@angular/core';

import { CommonComponent } from './common.component';
import { CommonRoutingModule } from './common.routing';
import { LeafletMapModule } from '@itkyo/leaflet-map';

@NgModule({
  imports: [
    LeafletMapModule,
    CommonRoutingModule
  ],
  providers: [],
  declarations: [ CommonComponent ]
})
export class CommonModule { }
