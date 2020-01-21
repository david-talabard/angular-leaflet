export interface MapMarker {
  latitude: number;
  longitude: number;
  info?: string;
  color?: string;
  heatmap?: boolean;
}

export interface MapLayer {
  name: string;
  url: string;
  options: {
    maxZoom: number;
    minZoom: number;
    attribution: string;
    detectRetina?: boolean;
  };
}
