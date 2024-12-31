import axiosInstance from '@/axios';
import { useEffect, useState } from 'react';

const useListSearchFetch = (search, url, payload, ...dependecies) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(url, payload);
      if (response.status === 200) {
        setData(response.data?.data?.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (!search) {
      fetchData();
    }
    if (search && search.length > 2) {
      timer = setTimeout(() => {
        fetchData();
      }, 250);
    }
    return () => clearTimeout(timer);
  }, [search, ...dependecies]);

  return { data, loading, error };
};

export default useListSearchFetch;
