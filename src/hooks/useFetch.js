import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await axios(url);
                let data = res.data;
                setData(data)
                setIsPending(false);
            } catch (error) {
                setError(error)
                setIsPending(true);
            }
        };
        setTimeout(() => {
            getData(url)
        }, 2000);
        
    }, [url])
    return [data, isPending, error]
};
