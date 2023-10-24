import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'
import { useLocation } from 'react-router';


export default function useDatabase() {

    const { pathname } = useLocation();
    const jsonStepFromQuery = pathname.split("/").slice(1);
    const [data, setData] = useState("");


    useEffect(() => {

        let tmpResult
        if (typeof pathname !== "string") tmpResult = false;
        else {
            tmpResult = DB

            for (const [_, value] of jsonStepFromQuery.entries()) {

                tmpResult = Array.isArray(tmpResult) ? tmpResult.find(result => result.id == value) : tmpResult = tmpResult[value]

                if (tmpResult === undefined) {
                    setData(false)
                    break;
                }
            }
        }
        console.log(tmpResult)
        setData(tmpResult);

    }, [])




    return data

}
