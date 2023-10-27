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
            tmpResult = DB
            for (const [_, value] of jsonStepFromQuery.entries()) {

                if (Array.isArray(tmpResult)) tmpResult = tmpResult.find(result => result.id == value)
                else tmpResult = tmpResult[value]

                if (tmpResult === undefined) {
                    setData(false)
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