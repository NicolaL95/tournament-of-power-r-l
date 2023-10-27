import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';



export default function useDatabase(customJsonPathRaw = null) {

    function formatCustomJsonPath(jsonPathRaw){
        return jsonPathRaw;
    }

    const {pathname} = useLocation();
    let customJsonPathFormatted;

    if(!customJsonPathRaw){
         customJsonPathFormatted  = pathname
    }else{
        customJsonPathFormatted = formatCustomJsonPath(customJsonPathRaw);
    }
        
    if ( customJsonPathFormatted === "/" ) customJsonPathFormatted += "homepage";
    const jsonStepFromQuery = customJsonPathFormatted.split("/").slice(1);
    const [data, setData] = useState("");



    useEffect(() => {   
        
        let tmpResult
        if (typeof customJsonPathFormatted !== "string") tmpResult = false;
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
        
    }, [])

    return [data,setData];
}