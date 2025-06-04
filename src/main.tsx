import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import "./index.css";
import FavoritesPage from "./favoritesPage";
import FavoritesProvider from "./context/FavoritesProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <FavoritesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                </Routes>
            </BrowserRouter>
        </FavoritesProvider>
    </StrictMode>
);
