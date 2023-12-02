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


export default function useDatabase(params = [],config = {}) {
    const [data, setData] = useState({});

    let { pathname: urlPath } = useLocation();
    //read config option from config object
    const getConfigFromParams = (configObject) => {
     
        const haveUrlPath = configObject.haveUrlPath === false ? false : true

        return {haveUrlPath}
    }

    //get the proper urlpath from a string
    const getJsonKeyFromString = (stringList) => {
        const tmpArray = [];
        stringList.forEach((stringElement) => {

            if (stringElement[0] === "/") { tmpArray.push(stringElement) }
            else {
                if (typeof stringElement === "string" && DB.jsonKey[stringElement]) tmpArray.push(DB.jsonKey[stringElement])
                else {
                    console.log(stringElement)
                    for (const [key,value] of Object.entries(stringElement)) {
                        if(DB.jsonKey[key]) tmpArray.push(`${DB.jsonKey[key]}${value}`)
                    }
                }
            }
        })
        return tmpArray;
    }

    const getDbFromJsonPath = (customParams = []) => {
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
            if(tmpResult) setData((prevData) => { return { ...prevData, [PathKey]: tmpResult } });
            

        })
    }


    if (urlPath === "/") urlPath += "homepage";
    const {haveUrlPath} = getConfigFromParams(config);
    //check if the hooks must call the urlPath from useLocation
    const defaultPathList = haveUrlPath ?  [urlPath, ...params] : params;

    useEffect(() => {
        getDbFromJsonPath(defaultPathList)
    }, [])
    
    useEffect(() => {
        console.log(data)
    }, [data])
 
    //the function is passed as setter to inject a custom path
    return [data, getDbFromJsonPath];
}


