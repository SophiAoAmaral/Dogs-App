import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

export const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(true);

    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try{
            setError(null);
            setloading(true);
            response = await fetch(url,options);
            json = await response.json();
            if(response.ok === false) throw new Error(json.message)
        }catch(err){
            json = null
            setError(err.message)
        }finally{
            setData(json)
            setloading(false)
            return {response, json}
        }
    }, []);

  return {
   data, 
   loading, 
   error,
   request
  };
}
