import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StellarDesign } from "./screens/StellarDesign/StellarDesign";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StellarDesign />
  </StrictMode>,
);
