import { useQuery } from "react-query";
import mapboxgl from "mapbox-gl";
import { searchAddress } from "@api/geocodingApi";

const useSearchAddress = (address: string) => {
  return useQuery(
    ["searchAddress", address],
    () => searchAddress(address, mapboxgl.accessToken),
    {
      enabled: address.length > 3,
    }
  );
};

export default useSearchAddress;
