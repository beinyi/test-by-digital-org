import * as React from "react";
import MuiDrawer from "@mui/joy/Drawer";
import useDrawer from "../../app/hooks/useDrawer";
import { DrawerHeader } from "../header";
import { Box } from "@mui/joy";

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
      <DrawerHeader />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
