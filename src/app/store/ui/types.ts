import { IAppModalProps } from "../../../components/modal/AppModal";

export interface UIState<T extends string> {
  modal: ModalState<T>;
}

export interface ModalOptions<
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  P extends object = {}
> {
  props?: P;
  appModalProps?: Omit<IAppModalProps, "open" | "onClose" | "children">;
}
export interface ModalState<T extends string> {
  modalType: T | null;
  options?: ModalOptions;
}

export interface SetPayload {
  type: string | null;
  options?: ModalOptions;
}
