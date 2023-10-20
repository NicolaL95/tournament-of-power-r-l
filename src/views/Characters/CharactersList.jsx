import { Link } from 'react-router-dom';

export default function CharactersList({ characters }) {
    return ( 
        <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
            {characters.map(character => (
                <div className="column" style={{padding: "10rem"}} key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <div>
                            <img src="nig.png" style={{maxHeight: "100px"}} className="py-2 px-2" />
                        </div>
                        { character.name }
                    </Link>
                </div>
            ))}
        </div>
    );
}