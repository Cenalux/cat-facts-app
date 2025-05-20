import Favorites from "./favorites";

export default function Header({ favorites }) {
    return (
        <div className="flex md:justify-center justify-between border-b border-gray-200 w-full h-14">
            <div className={"flex w-full items-center justify-between m-5"}>
                <p className={"font-bold"}>Cat Facts</p>
                <div className={"bg-gray-100 rounded-sm p-1 px-2"}>
                    <Favorites favorites={favorites} />
                </div>
            </div>
        </div>
    );
}
