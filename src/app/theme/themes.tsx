import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ZIndexOverrides {
    appBar: true;
    drawer: true;
  }
}

const mainTheme = extendTheme({
  zIndex: {
    drawer: 1100,
    appBar: 1200,
  },
});

export default mainTheme;
