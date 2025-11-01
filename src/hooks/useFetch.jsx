import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await axios.get(url);
        if (isMounted) {
          setData(res.data);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false; // cleanup
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
