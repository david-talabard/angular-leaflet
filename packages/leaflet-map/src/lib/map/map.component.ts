

import { Component, AfterViewInit, Input, IterableDiffers, IterableDiffer, DoCheck } from '@angular/core';
import { tileLayer, marker, map, control, Map, TileLayer, divIcon, DivIcon, Marker, featureGroup } from 'leaflet';
import { MapMarker, MapLayer } from './map.model';

@Component({
  selector: 'itkyo-leaflet-map',
  template: `
    <div class="map-container">
        <div id="map"></div>
    </div>
  `,
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit, DoCheck {
  map: Map;
  currentMarker: Marker;
  differ: IterableDiffer<MapMarker>;
  @Input() layers: MapLayer[] = [{
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
  }];
  @Input() center: number[];
  @Input() zoom: number;
  @Input() markers: MapMarker[] = [];


  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  ngAfterViewInit() {
    setTimeout(() => this.init());
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.markers);
    if (changes && this.map) {
      this.map.eachLayer((layer) => {
        if (layer._latlng)
          this.map.removeLayer(layer);
      });
      this.updateMarkers();
    }
  }

  /**
   * Init the map using input params or default values
   * Different layers are created
   */
  private init(): void {
    const layers = this.layers.reduce((leafletLayers: { [key: string]: TileLayer }, layer: MapLayer) => {
      leafletLayers[layer.name] = tileLayer(
        layer.url,
        layer.options
      );
      return leafletLayers;
    }, {});
    this.map = map('map', {
      center: this.center ? [this.center[0], this.center[1]] : [45, 0],
      zoom: this.zoom || 4,
      layers: [layers[Object.keys(layers)[0]]]
    });

    control.layers(layers).addTo(this.map);
    this.updateMarkers();
  }


  /**
   * Update markers
   * @see markers input
   */
  private updateMarkers() {
    let bounds = [];
    const markers = this.markers.map((m: MapMarker) => {
      if (m.latitude && m.longitude) {
        if (m.info) {
          return marker([m.latitude, m.longitude], { icon: this.getIcon(m.color) }).bindPopup(m.info).addTo(this.map);
        }
        return marker([m.latitude, m.longitude], { icon: this.getIcon(m.color) }).addTo(this.map);
      }
    });

    if (bounds.length) {
      this.map.fitBounds(featureGroup(markers).getBounds());
    }

  }

  /**
   * Get icon for a giving color using a html container
   * @param color
   */
  private getIcon(color?: string): DivIcon {
    const style = `
      background-color: ${color || '#27509b'};
      width: 1rem;
      height: 1rem;
      display: block;
      left: -0.5rem;
      top: 0;
      position: relative;
      border-radius: 1rem 1rem 0;
      transform: rotate(45deg);
      border: 1px solid #FFF;`;

    return divIcon({
      className: 'marker',
      iconAnchor: [0, 24],
      popupAnchor: [2, -20],
      html: `<span style="${style}" />`
    });
  }

}
