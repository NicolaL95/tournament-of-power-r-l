import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';

export default function useDatabase() {

    let { pathname } = useLocation();
    if ( pathname === "/" ) pathname += "homepage";
    const [data, setData] = useState("");

    const getDbFromJsonPath = (path) =>{
        const jsonStepFromQuery = path.split("/").slice(1);
        let tmpResult
        if (typeof path !== "string") tmpResult = false;
        else {
            partialSearchResult = DB
            for (const [_, step] of dbSearchPath.entries()) {
                if (Array.isArray(partialSearchResult)) partialSearchResult = partialSearchResult.find(element => element.id == step)
                else partialSearchResult = partialSearchResult[step]

                if (partialSearchResult === undefined) {
                    setSearchResult(false)
                    break;
                }
            }
        }
        setData(tmpResult);
    }

    useEffect(() => {   
        getDbFromJsonPath(pathname);
    }, [])

    return [data,getDbFromJsonPath];
}