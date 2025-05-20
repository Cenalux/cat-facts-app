import { useEffect, useState, useCallback } from "react";

export default function useFetchCatPictures() {
    const [catPicture, setCatpicture] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [id, setId] = useState("");

    const fetchCatPictures = useCallback(async () => {
        try {
            const res = await fetch(
                "https://api.thecatapi.com/v1/images/search"
            );
            const data = await res.json();
            console.log(data);
            setCatpicture(data[0].url);
            setId(data[0].id);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchCatPictures();
    }, [fetchCatPictures]);

    return { catPicture, loading, error, refetch: fetchCatPictures, id };
}
