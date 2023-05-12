import { Map,  NavigationControl } from "mapbox-gl";

export const addNavigationControl = (mapInstance: Map) => {
  mapInstance.addControl(new NavigationControl(), "bottom-right");
};