import { MAP_STYLE } from "@config/mapbox";
import { Map } from "mapbox-gl";

export const createMapInstance = (
  mapContainer: React.RefObject<HTMLDivElement>,
  initialCoordinates: [number, number]
): Map => {
  return new Map({
    container: mapContainer.current as HTMLElement,
    style: MAP_STYLE,
    center: initialCoordinates,
    zoom: 18,
    attributionControl: false,
  });
};
