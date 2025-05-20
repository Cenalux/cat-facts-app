import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NextPrevButtons({ updateCount, countState, refetch }) {
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
    };

    return (
        <div className="flex justify-between items-center px-2.5 w-full text-gray-300 h-full">
            <button>
                <ChevronLeft onClick={() => handleClick("prev")} />
            </button>
            <p className="text-xs">Swipe or us buttons</p>
            <button>
                <ChevronRight
                    onClick={() => {
                        handleClick("next");
                        refetch();
                    }}
                />
            </button>
        </div>
    );
}
