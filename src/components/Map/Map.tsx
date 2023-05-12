import { memo } from "react";

import { MapContainer } from "./Map.styled";
import i18next from "i18next";
import useMapbox from "@hooks/useMap";

const Map = memo(({ coordinates, setValue }: any) => {
  const { mapContainer } = useMapbox({
    initialCoordinates: coordinates,
    navigationControl: true,
    geolocateControl: true,
    zoom: 14,
    markerBounds: {
      radius: 100,
      onBoundsExceeded: () => {
        console.log(i18next.t("onBoundsExceededMessage"));
      },
    },
    onMarker: (coordinates: [number, number]) => {
      setValue("coordinates", coordinates);
    },
  });

  return <MapContainer className="mapbox-container" ref={mapContainer} />;
});

export default Map;
