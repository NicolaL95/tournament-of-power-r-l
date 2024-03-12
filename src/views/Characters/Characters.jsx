import { Link } from 'react-router-dom';
import useDatabase from '../../hooks/useDatabase';
import { useLocation } from 'react-router';
import getImage from "../../utils/getImage";
import CharactersWheel from '../../components/CharactersWheel';
import "./Characters.css"

export default function Characters() {

    const [characters] = useDatabase();
    const { pathname } = useLocation();

    return(
        <div className="is-full-height-width p-6">
            <div className="is-full-height-width columns is-flex is-flex-direction-row is-flex-wrap-wrap">
                <CharactersWheel characters={characters}/>
            </div>
        </div>
    );
}