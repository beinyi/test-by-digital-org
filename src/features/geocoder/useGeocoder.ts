import { useState } from "react";
import { geocode } from "./service/geodoceApi";
import { IGeocodeResponse } from "./service/types";

function useGeocoder() {
  const [response, setResponse] = useState<IGeocodeResponse | null>(null);

  const handleSubmit = async (request: string) => {
    try {
      const result = await geocode(request);
      setResponse(result);
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      setResponse(null);
    }
  };

  const featureMember =
    response?.response.GeoObjectCollection.featureMember ?? [];

  return {
    result: featureMember,
    handleSubmit,
  };
}

export default useGeocoder;
