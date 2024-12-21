import * as React from "react";
import {
  Modal,
  ModalClose,
  ModalProps,
  Sheet,
  SheetProps,
  Typography,
} from "@mui/joy";

export interface IAppModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  modalProps?: ModalProps;
  sheetProps?: SheetProps;
}

const AppModal: React.FunctionComponent<IAppModalProps> = ({
  children,
  open,
  onClose,
  title,
  modalProps,
  sheetProps,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      {...modalProps}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...modalProps?.sx,
      }}
    >
      <Sheet
        variant="outlined"
        {...sheetProps}
        sx={{
          maxWidth: 500,
          minWidth: 200,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          ...sheetProps?.sx,
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          level="title-md"
          textColor="inherit"
          sx={{ fontWeight: "lg", mb: 1, pr: 4 }}
        >
          {title}
        </Typography>
        {children}
      </Sheet>
    </Modal>
  );
};

export default AppModal;
