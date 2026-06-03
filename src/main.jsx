import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../input.css";

registerLicense("Ngo9BigBOggjHTQxAR8/V1JHaF1cXmhOYVBpR2NbeU54flBPalhTVAciSV9jS3hTcEVgWXdbeXFVR2heV091XA==");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
