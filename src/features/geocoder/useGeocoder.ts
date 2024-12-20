import { useState } from "react";
import { geocode } from "./service/geodoceApi";
import { IGeocodeResponse } from "./service/types";

function useGeocoder() {
  const [response, setResponse] = useState<IGeocodeResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (request: string) => {
    try {
      setIsLoading(true);
      const result = await geocode(request);
      setResponse(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching geocode data:", error);
      setResponse(null);
    }
  };

  const featureMember =
    response?.response.GeoObjectCollection.featureMember ?? [];

  return {
    result: featureMember,
    isLoading,
    handleSubmit,
  };
}

export default useGeocoder;
