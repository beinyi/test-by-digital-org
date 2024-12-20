import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import "@fontsource/inter";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
