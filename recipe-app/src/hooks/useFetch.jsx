import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // Component Level State
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // useEffect Hook the fetches on page load
  useEffect(() => {
    //Controller const to abort requests when needed.
    const controller = new AbortController();
    // Function that fetches the data
    const fetchData = async () => {
      // Reset pending state to true
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          // If response ok property not ok, throw an error
          throw new Error(res.statusText);
        }
        const json = await res.json();
        // After getting data, reset pending state back to false
        setIsPending(false);
        // Use returned data to init setData
        setData(json);
        // If data is returned, reset error back to null
        setError(null);
      } catch (error) {
        // Check specific controller error
        if (error.name === "AbortError") {
          console.log("fetch was aborted");
        } else {
          // If error, reset pending and error states accordingly
          setIsPending(false);
          setError("Could not fetch data");
          console.log(error.message);
        }
      }
    };
    // Envoke function to fetch the data
    fetchData();

    // Clean up function that aborts requests after completed to avoid memory leaks
    return () => {
      controller.abort();
    };
  }, [url]);

  // Return data, isPending and error
  return { data, isPending, error };
};
