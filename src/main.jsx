import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Your loader component
const loader = () => (
  <div className="loader">
    <h1>Loading...</h1>
    {/* You can add spinner or any animation here */}
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={loader()}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
