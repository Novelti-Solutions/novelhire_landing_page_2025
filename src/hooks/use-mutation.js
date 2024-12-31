import axiosInstance from '@/axios';
import { useState } from 'react';

const useMutation = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertData = async (payload) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        method,
        url,
        data: payload,
      });

      if (response.status === 200) {
        if (response.data.status === 'FAILURE') {
          setError(response.data, message);
          return;
        }

        setData(response.data?.data?.data);
        setError(null);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    insertData,
  };
};

export default useMutation;
