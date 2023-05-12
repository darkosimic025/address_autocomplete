import axiosInstance from "./axiosInstance";

const searchAddress = async (
  address: string,
  accessToken: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  try {
    const response = await axiosInstance.get(
      `/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`,
      {
        params: {
          proximity: "ip",
          types: "address",
          access_token: accessToken,
        },
      }
    );

    return response.data.features;
  } catch (error) {
    console.error("Error searching address:", error);
    throw error;
  }
};

export { searchAddress };
