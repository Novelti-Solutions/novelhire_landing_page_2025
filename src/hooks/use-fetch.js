import axiosInstance from '@/axios';
import { useEffect, useState } from 'react';

const useFetch = (url, method = 'GET', payload) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        method,
        url,
        data: payload,
      });

      if (response.status === 200) {
        if (Array.isArray(response.data.data)) {
          setData(response.data?.data);
        } else {
          setData(response.data?.data?.data);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, payload]);

  return { data, loading, error };
};

export default useFetch;
