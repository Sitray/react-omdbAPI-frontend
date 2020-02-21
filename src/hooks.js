import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log('hola');
        setData(json);
        console.log(json);
        if (json.Response === 'False') {
          setError(true);
        } else {
          setError(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.log('hola catch');
        setError(true);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export { useFetch };
