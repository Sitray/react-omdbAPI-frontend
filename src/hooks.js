import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export { useFetch };
