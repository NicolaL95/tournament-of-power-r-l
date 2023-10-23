import React, { useEffect, useState } from 'react'
import DB from '../db/db.json'


export default function useDatabase(queryRoute) {

    const jsonStepFromQuery = queryRoute.split("/");
    const [data, setData] = useState("");


    useEffect(() => {

        jsonStepFromQuery.shift();
        let tmpResult
        if (typeof queryRoute !== "string") tmpResult = false;
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




    return [data, setData]

}
