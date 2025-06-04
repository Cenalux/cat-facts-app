export default function Favorites({ favorites }) {
    return (
        <div>
            <p className="cursor-pointer bg-gray-100 rounded-sm p-1 px-2 hover:bg-gray-200 text-sm">
                Favorites: {favorites.length}
            </p>
        </div>
    );
}
