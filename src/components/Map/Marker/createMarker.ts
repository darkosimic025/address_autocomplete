import { Map, Marker } from "mapbox-gl";

export const createMarker = (map: Map, coordinates: [number, number]) => {
  const marker = new Marker({ draggable: true })
    .setLngLat(coordinates)
    .addTo(map);
  return marker;
};
