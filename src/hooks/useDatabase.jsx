import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';


export default function useDatabase(targetDbKeys = []) {
    const [data, setData] = useState({});
    let { pathname: urlPath } = useLocation();
    const keysToSearch = [];
        
    if (targetDbKeys.length !== 0) { keysToSearch.push(...targetDbKeys);}
    else { 
        if (urlPath === "/") urlPath += "homepage";
        keysToSearch.push(...(urlPath.split("/").slice(1)))
    }

    const getDbElementsFromKeys = (keysToSearch, startFrom = {}) => {
        let searchResult = DB;
        
        if (Object.keys(startFrom).length !== 0) searchResult = startFrom;
        
        for (let keyIndex in keysToSearch) {
            if (searchResult.hasOwnProperty(keysToSearch[keyIndex])) { searchResult = searchResult[keysToSearch[keyIndex]]; }

            else if (Array.isArray(searchResult)) {
                searchResult.forEach((element) => {
                    if (Object.keys(element).find(property => element[property] === keysToSearch[keyIndex])) searchResult = element
                })
            }
            
            else {
                searchResult = undefined;
                break;
            }
        }

        if(searchResult !== undefined) {
            setData((prevData) => { return { ...prevData, ...searchResult } });
        } 
    }

    useEffect(() => { getDbElementsFromKeys(keysToSearch) }, [])
 
    return [data, getDbElementsFromKeys];
}



