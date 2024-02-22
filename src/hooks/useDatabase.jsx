import { useEffect, useState } from 'react'
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

    const getDbElementsFromKeys = (keys) => {
        let searchResult = DB;

        keys.forEach(key => {
            if (searchResult.hasOwnProperty(key)) { searchResult = searchResult[key]; }

            else if (Object.values(searchResult).find(value => key === value )) searchResult = searchResult;

            else if (Array.isArray(searchResult)) {
                searchResult = searchResult.find(element => Object.keys(element).find(property => element[property] === key))
            }
            else searchResult = undefined;
        });
        if (searchResult !== undefined) setData((prevData) => { return { ...prevData, ...searchResult } });
    }

    useEffect(() => { getDbElementsFromKeys(keysToSearch) }, [])
 
    return [data, getDbElementsFromKeys];
}



