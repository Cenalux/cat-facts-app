import { Heart, X } from "lucide-react";

export default function BtnsLikeDislike({
    favorites,
    setFavorites,
    like,
    fact,
}) {
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
            console.log(e, like);
        }
    };

    return (
        <div className="flex flex-row w-full justify-evenly">
            <div className="text-red-400 border border-gray-300 shadow-lg rounded-full p-2.5">
                <X />
            </div>
            <div className="text-green-500 border border-gray-300 shadow-lg rounded-full p-2.5">
                <Heart onClick={() => handleClick("like")} />
            </div>
        </div>
    );
}
