import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import CatFacts from "./components/catFacts";

function App() {
    const [favorites, setFavorites] = useState([]);

    return (
        <>
            <Header favorites={favorites} />
            <CatFacts favorites={favorites} setFavorites={setFavorites} />
        </>
    );
}

export default App;
