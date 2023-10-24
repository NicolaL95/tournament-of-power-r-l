import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nigga from "../../assets/nig.png";
import useDatabase from '../../hooks/useDatabase';

export default function Characters() {

    const characters = useDatabase();
    
    return(
        <div className="container p-6">
            <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
                {Object.keys(characters).map(key =>
                    <div className="column" style={ {flexBasis: "auto"} } key={ characters[key].id }>
                        <Link to={ `/characters/${characters[key].id}` }>
                            <div>
                                <img src={ Nigga } style={ {height: "275px"} } className="py-2 px-2" />
                            </div>
                            { characters[key].name }
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}