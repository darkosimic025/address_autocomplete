import { useRef, useEffect } from "react";
import  { Map, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createMapInstance } from "@components/Map/createMap";
import { addNavigationControl } from "@components/Map/Controls/navigationControl";
import { addGeolocateControl } from "@components/Map/Controls/geolocateControl";
import { createMarker } from "@components/Map/Marker/createMarker";
import { greenPopup } from "@components/Map/Popup/createPopup";
import { addResetControl } from "@components/Map/Controls/resetControl";
import { handleMarkerDrag } from "@components/Map/Events/handleDragMarker";
import { handleMarkerDragEnd } from "@components/Map/Events/handleDragEndMarker";

const useMapbox = ({
  initialCoordinates,
  navigationControl = false,
  geolocateControl = false,
  zoom = 20,
  markerBounds,
  onMarker,
}: {
  initialCoordinates: [number, number];
  navigationControl?: boolean;
  geolocateControl?: boolean;
  zoom: number;
  markerBounds?: { radius: number; onBoundsExceeded: () => void };
  onMarker: (coordinates: [number, number]) => void;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);
  const marker = useRef<Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapInstance.current = createMapInstance(mapContainer, initialCoordinates);

    if (navigationControl) {
      addNavigationControl(mapInstance.current);
    }
    if (geolocateControl) {
      addGeolocateControl(mapInstance.current);
    }

    mapInstance.current.on("load", () => {
      if (!mapInstance.current) return;

      marker.current = createMarker(mapInstance.current, initialCoordinates);

      marker.current.setPopup(greenPopup);
      marker.current.togglePopup();

      const resetControl = addResetControl(
        marker.current,
        initialCoordinates,
        mapInstance.current,
        onMarker
      );
      mapInstance.current.addControl(resetControl, "bottom-left");

      marker.current.on("drag", () =>
        handleMarkerDrag(
          marker.current,
          initialCoordinates,
          onMarker,
          resetControl
        )
      );
      marker.current.on("dragend", () =>
        handleMarkerDragEnd(
          marker.current,
          onMarker,
          mapInstance.current,
          initialCoordinates,
          markerBounds
        )
      );
    });

    return () => {
      mapInstance.current?.remove();
    };
  }, [
    geolocateControl,
    initialCoordinates,
    markerBounds,
    navigationControl,
    onMarker,
    zoom,
  ]);

  return {
    mapContainer,
  };
};

export default useMapbox;
