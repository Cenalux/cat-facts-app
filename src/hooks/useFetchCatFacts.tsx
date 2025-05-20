import { useEffect, useState } from "react";

export default function useFetchCatFacts() {
    const [catFact, setCatFact] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCatFacts = async () => {
            try {
                const res = await fetch("https://catfact.ninja/fact");
                const data = await res.json();
                setCatFact(data.fact);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };

        fetchCatFacts();
    }, []);

    return { catFact, loading, error };
}
