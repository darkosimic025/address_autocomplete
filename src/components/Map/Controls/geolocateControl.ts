import { Map, GeolocateControl } from "mapbox-gl";

export const addGeolocateControl = (mapInstance: Map) => {
  mapInstance.addControl(
    new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    }),
    "bottom-right"
  );
};
