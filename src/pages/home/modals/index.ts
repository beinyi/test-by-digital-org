import React from "react";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export enum HomeModalTypes {
  CREATE = "HOME_CREATE",
  EDIT = "HOME_EDIT",
  DELETE = "HOME_DELETE",
}

export type HomeModalType = `${HomeModalTypes}`;

export const homeModalRegistry: Record<
  HomeModalTypes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.FunctionComponent<React.ComponentProps<any>>
> = {
  [HomeModalTypes.CREATE]: CreateModal,
  [HomeModalTypes.EDIT]: EditModal,
  [HomeModalTypes.DELETE]: DeleteModal,
};
