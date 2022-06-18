import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        setIsLoading(false);
        if (info.error) {
          setError({ message: info.error });
          // console.log(info);
        } else {
          setData(info);
          console.log(error);
        }
      });
  }, []);
  return [isLoading, error, data];
};
