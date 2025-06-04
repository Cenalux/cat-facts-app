import { LoaderCircle } from "lucide-react";
import NextPrevButtons from "./nextPrevButtons";
import BtnsLikeDislike from "./BtnsLikeDislike";
import { useState, useEffect } from "react";
import useFetchCatFacts from ".././hooks/useFetchCatFacts";
import useFetchCatPictures from ".././hooks/useFetchCatPictures";

export default function CatFacts({ favorites, setFavorites }) {
    const [count, setCount] = useState(1);
    const { catFact, catFactsLoading, catFactsError, refetchFact } =
        useFetchCatFacts();
    const { catPicture, catPictureLoading, catPictureError, refetch, id } =
        useFetchCatPictures();
    const [clicked, setClicked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!catFactsLoading && !catPictureLoading) {
            setIsLoaded(true);
        } else {
            setIsLoaded(false);
        }
    }, [catFactsLoading, catPictureLoading]);

    return (
        <div className="bg-gray-50 p-2.5 h-screen w-full rounded-b-xl md:w-150 md:h-full md:mx-auto">
            {!isLoaded ? (
                <div className="flex justify-center py-50">
                    <LoaderCircle className="mr-3 size-5 animate-spin" />
                    <p>Loading...</p>
                </div>
            ) : catPictureError || catFactsError ? (
                <p className="flex justify-center py-50">
                    Error fetching cat data!
                </p>
            ) : (
                <div className="flex flex-col items-center justify-center shadow-md rounded-xl h-auto m-5 bg-gray-200">
                    <div className="w-full h-full relative">
                        <img
                            src={catPicture}
                            alt="Cat"
                            className="rounded-t-lg w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col w-full h-full rounded-b-xl bg-white p-2.5">
                        <div className="flex flex-row items-center h-5 w-full">
                            <h2 className="m-2 mt-5 font-medium text-lg">
                                Viewed Cat Fact # {count}
                            </h2>
                        </div>

                        <div className="my-5">
                            <p>{catFact}</p>
                        </div>
                        <div className="flex flex-col w-full h-full mt-5">
                            <div className="flex flex-row mb-5">
                                <BtnsLikeDislike
                                    like={id}
                                    fact={catFact}
                                    setFavorites={setFavorites}
                                    favorites={favorites}
                                    refetchFact={refetchFact}
                                    refetchImg={refetch}
                                    updateCount={setCount}
                                    countState={count}
                                    setClicked={setClicked}
                                    clicked={clicked}
                                />
                            </div>
                            <div>
                                <NextPrevButtons
                                    updateCount={setCount}
                                    countState={count}
                                    id={id}
                                    refetch={refetch}
                                    refetchFact={refetchFact}
                                    setClicked={setClicked}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
