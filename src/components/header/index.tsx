import { Box, IconButton, Sheet } from "@mui/joy";
import * as React from "react";
import MenuIcon from "../../app/assets/icons/MenuIcon";
import useDrawer from "../../app/hooks/useDrawer";
import { SxProps } from "@mui/joy/styles/types";

interface IHeaderProps {
  children?: React.ReactNode;
}

const sxProps: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  p: 2,
  minWidth: "min-content",
  background: (theme) =>
    `linear-gradient(to top, ${theme.palette.primary[600]}, ${theme.palette.primary[500]})`,
  height: "52px",
  padding: (theme) => theme.spacing(2),
  zIndex: (theme) => theme.zIndex.appBar,
};

export const DrawerHeader: React.FunctionComponent = () => (
  <Box
    sx={
      {
        height: sxProps.height,
        padding: sxProps.padding,
      } as SxProps
    }
  />
);

const Header: React.FunctionComponent<IHeaderProps> = ({
  children,
}: IHeaderProps) => {
  const { handleSwitchDrawer } = useDrawer();

  return (
    <Sheet
      color="primary"
      component="header"
      invertedColors
      variant="solid"
      sx={sxProps}
    >
      <IconButton variant="solid" size="sm" onClick={handleSwitchDrawer}>
        <MenuIcon />
      </IconButton>
      {children}
    </Sheet>
  );
};

export default Header;
