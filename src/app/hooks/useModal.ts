import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { ModalOptions } from "../store/ui/types";
import { closeModal, openModal } from "../store/ui/reducer";

const useModal = <T extends string>() => {
  const dispatch = useDispatch();

  const modalType = useSelector(
    (state: RootState) => state.ui.modal.modalType
  ) as T;
  const options = useSelector((state: RootState) => state.ui.modal.options);

  function open<P extends object>(type: T, options?: ModalOptions<P>) {
    dispatch(openModal({ type, options }));
  }

  function close() {
    dispatch(closeModal());
  }

  return {
    modalType,
    modalProps: options?.props,
    appModalProps: options?.appModalProps,
    openModal: open,
    closeModal: close,
  };
};

export type OpenModalFunction<T extends string = ""> = <P extends object>(
  type: T,
  options?: ModalOptions<P>
) => void;

export default useModal;
