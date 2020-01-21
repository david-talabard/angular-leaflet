import { Component, OnInit } from '@angular/core';
import { MapMarker, MapLayer } from '@itkyo/leaflet-map';

@Component({
  templateUrl: 'common.component.html'
})
export class CommonComponent implements OnInit {
  // Map
  markers: MapMarker[] = [{
    latitude: 45.777222,
    longitude: 3.087025,
    info: 'Test'
  }];

  layers: MapLayer[] = [{
    name: 'Outdoors',
    url: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=01c9becf537e4671a8cc5b41ae682063',
    options: {
      maxZoom: 18,
      minZoom: 1,
      attribution: 'Maps © Thunderforest, © OpenStreetMap contributors'
    }
  },
  {
    name: 'Cartodb',
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    options: {
      maxZoom: 18,
      minZoom: 1,
      attribution: '© Cartodb',
      detectRetina: false
    }
  },
  {
    name: 'Viamichelin',
    url: 'http://map2.viamichelin.com/map/mapdirect?map=viamichelin&z={z}&x={x}&y={y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*',
    options: {
      maxZoom: 18,
      minZoom: 1,
      attribution: '© Michelin'
    }
  }];

  constructor() { }

  /**
   * Execute when component is initialized.
   * @method
   */
  ngOnInit() { }
}
