import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nigga from "../../assets/nig.png";
import useDatabase from '../../hooks/useDatabase';



export default function Characters() {

   
   
    useEffect(() => {
      

    
     
    }, [])
    
  return (
    <div className="container p-6">
       {/*  <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
            {Db.map( character => (
                <div className="column" style={{flexBasis: "auto"}} key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <div>
                            <img src={Nigga} style={{height: "275px"}} className="py-2 px-2" />
                        </div>
                        { character.name }
                    </Link>
                </div>
            ))}
        </div> */}
    </div>
  )
}