import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import PuzzelsProvider from "./Provider/PuzzelsProvider.tsx";
import UserProvider from "./Provider/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PuzzelsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PuzzelsProvider>
    </BrowserRouter>
  </StrictMode>
);
