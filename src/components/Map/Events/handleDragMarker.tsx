import { Marker } from "mapbox-gl";
import { ResetControl } from "../Controls/resetControl";

export const handleMarkerDrag = (
  marker: Marker | null,
  initialCoordinates: [number, number],
  onMarker: (coordinates: [number, number]) => void,
  resetControl: ResetControl
) => {
  if (!marker) return;

  const newCoordinates = marker.getLngLat();
  const [lng, lat] = [newCoordinates.lng, newCoordinates.lat];
  onMarker([lng, lat]);

  const isCoordinatesChanged =
    lng !== initialCoordinates[0] || lat !== initialCoordinates[1];
  isCoordinatesChanged ? resetControl.show() : resetControl.hide();
};
