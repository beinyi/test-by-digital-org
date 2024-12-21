import { Point } from "../../types/points";

export interface PointsState {
  points: Array<Point>;
}

export type SetAddPointPayload = Point;
export type SetUpdatePointPayload = Point;
export type SetRemovePointPayload = number;
