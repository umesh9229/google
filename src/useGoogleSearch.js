import { useState, useEffect} from 'react';
import API_KEY from "./Keys";

const CONTEXT_KEY ="310653041e3c7c75e";
const useGoogleSearch = (term) => {

    const [data,setData] =useState(null);

    useEffect (()  => {
        const fetchData =async() => {
            fetch(
               `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&maxResults=25` 
            )
            .then(Response => Response.json())
            .then(result =>{
                setData(result)
            })
        }

        fetchData();

    }, [term])

    return { data }
    



  
};

export default useGoogleSearch