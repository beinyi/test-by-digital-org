import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import "@fontsource/inter";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/index.ts";
import { CssVarsProvider, StyledEngineProvider } from "@mui/joy";
import mainTheme from "./app/theme/themes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={mainTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </CssVarsProvider>
    </StyledEngineProvider>
  </StrictMode>
);
