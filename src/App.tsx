import mapboxgl from "mapbox-gl";
import Form from "./components/Form/Form";

const App = () => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  if (!mapboxgl.accessToken)
    throw new Error("Please, provide token for Mapbox API!");
  return <Form />;
};

export default App;
