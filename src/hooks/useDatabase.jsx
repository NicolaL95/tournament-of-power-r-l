/* import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';

export default function useDatabase() {

    console.log('arguments',arguments)
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
} */


import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';


export default function useDatabase(...params) {
    const [data, setData] = useState({});

    let { pathname: urlPath } = useLocation();

    const getConfigFromParams = (dirtyParams) => {
     
        let haveUrlPath = true;

        dirtyParams.forEach((paramOption, index) => {
            if (typeof paramOption === "object" && paramOption.config) {           
                haveUrlPath = paramOption.config.haveUrlPath
                dirtyParams.splice(index, 1);
              
            }
        })
        return { cleanParams:dirtyParams, haveUrlPath }
    }
    const getJsonKeyFromString = (stringList) => {
        const tmpArray = [];
        stringList.forEach((stringElement) => {

            if (stringElement[0] === "/") { tmpArray.push(stringElement) }
            else {
                if (typeof stringElement === "string" && DB.jsonKey[stringElement]) tmpArray.push(DB.jsonKey[stringElement])
                else {
                    const { key, value } = stringElement;
                    if(DB.jsonKey[key]) tmpArray.push(`${DB.jsonKey[key]}${value}`)
                    
                }
            }
        })
        return tmpArray;
    }

    const getDbFromJsonPath = (...customParams) => {
        let PathKey = ""
        let newParams = getJsonKeyFromString(customParams);
        newParams.forEach((path) => {
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
                    PathKey = value;
                    if (tmpResult === undefined) {
                        break;
                    }
                }
            }
            setData((prevData) => { return { ...prevData, [PathKey]: tmpResult } });

        })
    }


    if (urlPath === "/") urlPath += "homepage";
    const { cleanParams, haveUrlPath } = getConfigFromParams(params);
    const defaultPathList = haveUrlPath ?  [urlPath, ...cleanParams] : [...cleanParams];

    useEffect(() => {
        getDbFromJsonPath(...defaultPathList)
    }, [])
    
 
    //the function is passed as setter to inject a custom path
    return [data, getDbFromJsonPath];
}


