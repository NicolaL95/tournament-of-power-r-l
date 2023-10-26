import React from 'react';
import { Link } from 'react-router-dom';
import useDatabase from '../../hooks/useDatabase';
import { useLocation } from 'react-router';
import getImage from "../../utils/getImage";

export default function Characters() {

    const [characters] = useDatabase();
    const { pathname } = useLocation();

    return(
        <div className="p-6">
            <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
                {Object.keys(characters).map(key =>
                    <div className="column" style={ {flexBasis: "auto"} } key={ characters[key].id }>
                        <Link to={ pathname  + "/" + characters[key].id}>
                            <div>       
                                <img src={ getImage(characters[key]?.src) } alt="" style={ {height: "275px"} } className="py-2 px-2"/>
                            </div>
                            { characters[key].name }
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}