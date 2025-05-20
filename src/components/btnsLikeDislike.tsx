import { Heart, X } from "lucide-react";

export default function BtnsLikeDislike() {
    return (
        <div className="flex flex-row w-full justify-evenly">
            <div className="text-red-400 border border-gray-300 shadow-lg rounded-full p-2.5">
                <X />
            </div>
            <div className="text-green-500 border border-gray-300 shadow-lg rounded-full p-2.5">
                <Heart />
            </div>
        </div>
    );
}
