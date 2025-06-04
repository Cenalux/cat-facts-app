import { Link } from "react-router";

import Favorites from "./favorites";

export default function Header({ favorites, setPage }) {
    return (
        <div className="flex md:justify-center justify-between border-b mt-2.5 border-gray-200 w-full md:mx-auto md:w-150 h-14">
            <div className={"flex w-full items-center justify-between m-5"}>
                <p className={"font-bold text-lg"}>Cat Facts</p>
                <Link to="/favorites">
                    <Favorites favorites={favorites} setPage={setPage} />
                </Link>
            </div>
        </div>
    );
}
