import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';

export default function useDatabase() {
    //get page url to filter the local DB
    let { pathname } = useLocation();
    if ( pathname === "/" ) pathname += "homepage";
    const [data, setData] = useState("");

    //function to iterate the db. Each iteration get a more specific part of the DB
    const getDbFromJsonPath = (path) =>{
        const jsonStepFromQuery = path.split("/").slice(1);
        let tmpResult
        if (typeof path !== "string") tmpResult = null;
        else {
            tmpResult = DB
            for (const [_, value] of jsonStepFromQuery.entries()) {
                //if the current element is an array, it will find the next step trought id
                if (Array.isArray(tmpResult)) tmpResult = tmpResult.find(result => result.id == value)
                 //if it is an object by key
                else tmpResult = tmpResult[value]
               
                if (tmpResult === undefined) {
                    setData(null)
                    break;
                }
            }
        }
        setData(tmpResult);
    }

    useEffect(() => {   
        getDbFromJsonPath(pathname);
    }, [])
    //the function is passed as setter to inject a custom path
    return [data,getDbFromJsonPath];
}