import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  // Component Level State
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  // Funtion that sets the ground to make an HTTP POST Request
  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  // useEffect Hook the fetches on page load
  useEffect(() => {
    //Controller const to abort requests when needed.
    const controller = new AbortController();
    // Function that fetches the data
    const fetchData = async (fetchOptions) => {
      // Reset pending state to true
      setIsPending(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
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
    // Check if method is GET. If so, call the fetchData function to make a GET request
    if (method === "GET") {
      // Envoke function to fetch the data
      fetchData();
    }
    // Check if method is POST. If so, check if we have the options for the POST request. If so, make pass the options in as an argument and make a POST request
    if (method === "POST" && options) {
      // Envoke function to fetch the data
      fetchData(options);
    }

    // Clean up function that aborts requests after completed to avoid memory leaks
    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  // Return data, isPending and error
  return { data, isPending, error, postData };
};
