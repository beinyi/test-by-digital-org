import * as React from "react";
import MuiDrawer from "@mui/joy/Drawer";
import useDrawer from "../../app/hooks/useDrawer";

interface IDrawerProps {
  children?: React.ReactNode;
}

const Drawer: React.FunctionComponent<IDrawerProps> = ({
  children,
}: IDrawerProps) => {
  const { isOpen, handleSwitchDrawer } = useDrawer();
  return (
    <MuiDrawer
      open={isOpen}
      onClose={handleSwitchDrawer}
      hideBackdrop
      size="sm"
      disablePortal
      disableEnforceFocus
      slotProps={{
        root: {
          sx: {
            width: 200,
            zIndex: (theme) => theme.zIndex.drawer,
          },
        },
      }}
    >
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
