import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function BtnsLikeDislike({
    like,
    fact,
    refetchFact,
    refetchImg,
    updateCount,
    setClicked,
    clicked,
}) {
    const { favorites, setFavorites } = useFavorites();
    const handleClick = (e) => {
        if (
            e === "like" &&
            !favorites.some((item) => item.fact === fact || item.id === like)
        ) {
            const newItem = {
                id: like,
                url: `https://cdn2.thecatapi.com/images/${like}.jpg`,
                fact: fact,
            };
            setFavorites((prevItem) => [...prevItem, newItem]);
            setClicked(true);
        }
        if (e === "dislike") {
            setClicked(false);
            // console.log("test");
            refetchFact();
            refetchImg();
            updateCount((prev) => prev + 1);
        }
    };

    return (
        <div className="flex flex-row w-full justify-evenly">
            {/* <div className="text-red-400 border border-gray-300 shadow-lg rounded-full p-2.5">
                <X onClick={() => handleClick("dislike")} />
            </div> */}
            <div
                className={`${
                    clicked
                        ? " text-white bg-red-500 border-gray-300 shadow-lg rounded-full p-2.5 animate-[ping_1s_cubic-bezier(0,0,0.2,1)_1]"
                        : "text-red-500  border border-gray-300 shadow-lg rounded-full p-2.5"
                }`}
            >
                <Heart onClick={() => handleClick("like")} />
            </div>
        </div>
    );
}
