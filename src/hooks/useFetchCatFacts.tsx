import { useEffect, useState, useCallback } from "react";

export default function useFetchCatFacts() {
    const [catFact, setCatFact] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchCatFacts = useCallback(async () => {
        setLoading(true);
        try {
            // await new Promise((res) => setTimeout(res, 2000));
            const res = await fetch("https://catfact.ninja/fact");
            const data = await res.json();
            setCatFact(data.fact);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchCatFacts();
    }, [fetchCatFacts]);

    return {
        catFact,
        catFactsLoading: loading,
        catFactsError: error,
        refetchFact: fetchCatFacts,
    };
}
