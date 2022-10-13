import React from 'react';

const useFetchPOST = () => {
  //Data, loading and error states
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({ type: '', message: '' });

  const fetchPost = async (url, data) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.headers.get('content-type')) throw new Error('Unknown Error, update page and try again!');

      let parse = await response.json();

      if (parse?.data) {
        setData(parse.data);
        setLoading(false);
        setError(null);
        return;
      }

      if (parse?.error) {
        setLoading(false);
        setError(parse.error);
        return;
      }
    } catch (err) {
      setLoading(false);
      setError({ type: 'Unknown', message: err.message });
    }
  };

  return { data, loading, error, fetchPost };
};

export default useFetchPOST;
