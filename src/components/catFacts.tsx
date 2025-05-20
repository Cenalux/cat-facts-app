import { Info } from "lucide-react";
import NextPrevButtons from "./nextPrevButtons";
import BtnsLikeDislike from "./BtnsLikeDislike";
import { useState } from "react";
import useFetchCatFacts from ".././hooks/useFetchCatFacts";
import useFetchCatPictures from ".././hooks/useFetchCatPictures";

export default function CatFacts({ favorites, setFavorites }) {
    const [count, setCount] = useState(1);
    const { catFact, catFactsLoading, catFactsError } = useFetchCatFacts();
    const { catPicture, catPictureLoading, catPictureError, refetch, id } =
        useFetchCatPictures();

    console.log("pic", catPicture);

    console.log("fav", favorites);

    return (
        <div className="bg-gray-50 p-2.5 h-screen w-full">
            <div className="flex flex-col items-center justify-center shadow-md rounded-t-xl h-auto m-5 bg-gray-200">
                <div className="w-full h-full relative">
                    {catPictureLoading && <p>Loading...</p>}
                    {catPictureError && <p>Error fetching cat image!</p>}
                    {catPicture && (
                        <img
                            src={catPicture}
                            alt="Cat"
                            className="rounded-t-lg w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="flex flex-col w-full h-full rounded-b-xl bg-white p-2.5">
                    <div className="flex flex-row items-center h-5 w-full">
                        <Info className="size-4" strokeWidth={1.5} />
                        <h2 className="ml-2.5 font-medium">
                            Cat Fact # {count}
                        </h2>
                    </div>

                    <div className="my-5">
                        {catFact ||
                            (catFactsLoading && <p>Loading...</p>) ||
                            (catFactsError && <p>Error fetching cat facts!</p>)}
                    </div>
                    <div className="flex flex-col w-full h-full mt-5">
                        <div className="flex flex-row mb-5">
                            <BtnsLikeDislike
                                like={id}
                                fact={catFact}
                                setFavorites={setFavorites}
                                favorites={favorites}
                            />
                        </div>
                        <div>
                            <NextPrevButtons
                                updateCount={setCount}
                                countState={count}
                                id={id}
                                refetch={refetch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
