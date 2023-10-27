import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';

export default function useDatabase() {

    let { pathname } = useLocation();
    if ( pathname === "/" ) pathname += "homepage";
    const dbSearchPath = pathname.split("/").slice(1);
    const [searchResult, setSearchResult] = useState("");

    useEffect(() => {   
        
        let partialSearchResult
        if (typeof pathname !== "string") partialSearchResult = false;
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
        setSearchResult(partialSearchResult);
        
    }, [])

    return searchResult;
}