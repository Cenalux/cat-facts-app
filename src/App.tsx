import "./App.css";

import Header from "./components/header";
import CatFacts from "./components/catFacts";
import { useFavorites } from "./context/FavoritesContext";

function App() {
    const { favorites, setFavorites } = useFavorites();

    return (
        <div>
            <Header favorites={favorites} />
            <CatFacts favorites={favorites} setFavorites={setFavorites} />
        </div>
    );
}

export default App;
