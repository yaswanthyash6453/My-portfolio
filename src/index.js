import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

import "aos/dist/aos.css";
import AOS from "aos";

import Preloader from "./components/Preloader";

AOS.init({
  once: true,
  duration: 700,
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Preloader>
        <App />
      </Preloader>
    </BrowserRouter>
  </React.StrictMode>
);
