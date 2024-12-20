import React from "react";

import useModal from "../../app/hooks/useModal";
import AppModal from "./AppModal";

interface IModalManagerProps<T extends string> {
  registry: Record<T, React.FunctionComponent<unknown>>;
}

const ModalManager = <T extends string>({
  registry,
}: IModalManagerProps<T>) => {
  const { modalType, modalProps, appModalProps, closeModal } = useModal<T>();

  if (!modalType) return null;

  const ModalComponent = registry[modalType] as React.FunctionComponent<
    typeof modalProps
  >;

  if (!ModalComponent) {
    console.error(`Модальное окно не зарегистрировано: ${modalType}`);
    return null;
  }

  return (
    <AppModal {...appModalProps} open={true} onClose={closeModal}>
      <ModalComponent {...modalProps} />
    </AppModal>
  );
};

export default ModalManager;
