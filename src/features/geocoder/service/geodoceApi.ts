import axios from "axios";
import { IGeocodeParams, IGeocodeResponse } from "./types";

const VITE_YANDEX_API_KEY = import.meta.env.VITE_YANDEX_API_KEY;

export async function geocode(
  request: string,
  params?: Partial<IGeocodeParams>
) {
  try {
    const res = await axios.get<IGeocodeResponse>(
      "https://geocode-maps.yandex.ru/1.x",
      {
        params: {
          apikey: VITE_YANDEX_API_KEY,
          geocode: request,
          format: "json",
          ...params,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Geocoder error:", error);
    return null;
  }
}
