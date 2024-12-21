import { Point } from "../types/points";

export function convertCoodinates(coordinateString: string) {
  return coordinateString
    .split(" ")
    .map((coord) => parseFloat(coord.trim()))
    .reverse();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPoint(obj: any): obj is Point {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.title === "string" &&
    typeof obj.description === "string" &&
    Array.isArray(obj.location)
  );
}
