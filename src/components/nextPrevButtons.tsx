import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NextPrevButtons({
    updateCount,
    countState,
    refetch,
    refetchFact,
    setClicked,
}) {
    const handleClick = (e) => {
        if (e === "next") {
            updateCount((prev) => {
                const increment = prev + 1;
                return increment;
            });
        }
        if (e === "prev" && countState > 1) {
            updateCount((prev) => {
                const decrement = prev - 1;
                return decrement;
            });
        }
        refetch();
        refetchFact();
        setClicked(false);
    };

    // TODO: implement swipe

    return (
        <div className="flex justify-between items-center px-2.5 w-full text-gray-300 h-full">
            <button>
                {/* <ChevronLeft onClick={() => handleClick("prev")} /> */}
            </button>
            <button className="border rounded-2xl bg-gray-300 p-1 m-2">
                <ChevronRight
                    onClick={() => {
                        handleClick("next");
                    }}
                    className="text-white"
                />
            </button>
        </div>
    );
}
