import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';


export default function useDatabase(targetDbKeys = []) {
    const [data, setData] = useState({});
    let { pathname: urlPath } = useLocation();
    const keysToSearch = [];
        
    if (targetDbKeys.length !== 0) { keysToSearch.push(...targetDbKeys); }
    else { 
        if (urlPath === "/") urlPath += "homepage";
        keysToSearch.push(...(urlPath.split("/").slice(1)))
    }

    const getDbElementsFromKeys = (keys, currentResult = DB) => {
        let searchResult = currentResult;
        
        keys.forEach((key) => {
            if (searchResult.hasOwnProperty(key)) searchResult = searchResult[key];
            
            else if (Array.isArray(searchResult)) {
                searchResult.forEach((element) => { getDbElementsFromKeys([key], element) })
            }
        })
        setData((prevData) => { return { ...prevData, ...searchResult } });
    }
    
    useEffect(() => { getDbElementsFromKeys(keysToSearch) }, [])
 
    return [data, getDbElementsFromKeys];
}