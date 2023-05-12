import { Popup } from "mapbox-gl";
import "./Popup.styled.css";

export const greenPopup = new Popup({
  offset: 40,
  closeOnMove: false,
  focusAfterOpen: true,
  className: "costum-popup costum-popup-green",
  closeButton: false,
  closeOnClick: true,
}).setText(
  "To adjust your location, simply move the marker to the desired position."
);

export const redPopup = new Popup({
  offset: 40,
  closeOnMove: false,
  focusAfterOpen: true,
  className: "costum-popup costum-popup-red",
  closeButton: false,
}).setText(
  "Your marker is too far from the original coordinates. Please move the marker closer to your actual location."
);
