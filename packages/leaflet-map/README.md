# Leaflet map

The `@itkyo/leaflet-map` package is a library which contains michelin components to manage filters, vehicles, sensolines, plotly.

## Usage

Make sure `leaflet` is correctly installed.

You need to update `angular.json` file, like the following example :
```json
"styles": [
  "node_modules/leaflet/dist/leaflet.css",
  "..."
],
"scripts": [
  "./node_modules/leaflet/dist/leaflet.js",
  "..."
]
```

The map component use leaflet.
This component is really simple to use. 
Map just take a list of markers, use the model `MapMarker`.

```typescript
  markers: MapMarker[] = [{
    latitude: 45.777222,
    longitude: 3.087025,
    info: 'Test',
    color: '#32a852'
  }];
```

You can change layers by using the input `layers` and model `MapLayer`

```typescript
  layers: MapLayer[] = [{
    name: 'Viamichelin',
    url: 'http://map2.viamichelin.com/map/mapdirect?map=viamichelin&z={z}&x={x}&y={y}&format=png&version=201606031210&layer=background&locale=default&debug_pattern=.*',
    options: {
      maxZoom: 18,
      minZoom: 1,
      attribution: '© Michelin'
    }
  }];
```

```html
<itkyo-leaflet-map
    [markers]="markers" >
</itkyo-leaflet-map>
```

