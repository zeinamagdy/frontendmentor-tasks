import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/static/Figtree-ExtraBold.ttf";
import "./assets/fonts/static/Figtree-Medium.ttf";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
