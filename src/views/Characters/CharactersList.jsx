import { Link } from 'react-router-dom';

export default function CharactersList({ characters }) {
    return ( 
        <div class="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
            {characters.map(character => (
                <div class="column" style={{padding: "10rem"}}>
                    <Link to={`/characters/${character.id}`}>
                        <div>
                            <img src="car.png" style={{maxHeight: "100px"}} class="py-2 px-2" />
                        </div>
                        { character.name }
                    </Link>
                </div>
            ))}
        </div>
    );
 }