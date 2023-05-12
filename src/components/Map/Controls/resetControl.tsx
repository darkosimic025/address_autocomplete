import mapboxgl, { Map, Marker } from "mapbox-gl";
import "./ResetControl.style.css";
import { greenPopup } from "../Popup/createPopup";

export class ResetControl implements mapboxgl.IControl {
  private _map?: mapboxgl.Map;
  private _container: HTMLElement;
  private _resetButton: HTMLButtonElement;
  private _onClick: () => void;

  constructor(onClick: () => void) {
    this._onClick = onClick;
    this._container = document.createElement("div");
    this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
    this._resetButton = document.createElement("button");
    this._resetButton.type = "button";
    this._resetButton.className = "reset-button";
    this._resetButton.innerHTML = "Reset";
    this._resetButton.onclick = this._onClick;
    this._container.appendChild(this._resetButton);
  }

  onAdd(map: mapboxgl.Map): HTMLElement {
    this._map = map;
    return this._container;
  }

  onRemove(): void {
    this._container.parentNode?.removeChild(this._container);
    this._map = undefined;
  }

  hide(): void {
    this._container.style.display = "none";
  }

  show(): void {
    this._container.style.display = "block";
  }
}

export const addResetControl = (
  marker: Marker | null,
  initialCoordinates: [number, number],
  mapInstance: Map | null,
  onMarker: ((coordinates: [number, number]) => void) | undefined
) => {
  const resetControl = new ResetControl(() => {
    if (marker) {
      onMarker?.([initialCoordinates[0], initialCoordinates[1]]);
      marker.setPopup(greenPopup);
      marker.setLngLat(initialCoordinates);
      mapInstance?.flyTo({ center: initialCoordinates });
      resetControl.hide();
    }
  });
  resetControl.hide();
  return resetControl;
};
