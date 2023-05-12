import { calculateMaxBounds } from "@utils/calculateMaxBounds";
import { Map, Marker } from "mapbox-gl";
import { greenPopup, redPopup } from "../Popup/createPopup";

export const handleMarkerDragEnd = (
  marker: Marker | null,
  onMarker: (coordinates: [number, number]) => void,
  mapInstance: Map | null,
  initialCoordinates: [number, number],
  markerBounds?: {
    radius: number;
    onBoundsExceeded: () => void;
  }
) => {
  if (!marker || !mapInstance || !markerBounds) return;

  const newCoordinates = marker.getLngLat();
  onMarker([newCoordinates.lng, newCoordinates.lat]);
  mapInstance.flyTo({ center: newCoordinates });

  const maxBounds = calculateMaxBounds(initialCoordinates, markerBounds.radius);
  if (!maxBounds) return;

  const { lng, lat } = newCoordinates;
  const [minLng, minLat] = maxBounds[0];
  const [maxLng, maxLat] = maxBounds[1];

  const isLngWithinBounds = lng >= minLng && lng <= maxLng;
  const isLatWithinBounds = lat >= minLat && lat <= maxLat;

  if (!isLngWithinBounds || !isLatWithinBounds) {
    markerBounds.onBoundsExceeded();
    marker.setPopup(redPopup);
  } else {
    marker.setPopup(greenPopup);
  }

  marker.togglePopup();
};
