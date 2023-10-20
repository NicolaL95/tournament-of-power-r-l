import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../components/UseFetch";
import Nigga from "../../assets/nig.png"
export default function CharacterDetails() {
    const { id } = useParams();
    const { data: character, error, isPending } = useFetch('http://localhost:8000/characters/' + id);

    return ( 
        <section className="section">
            <div className="container">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { character && (
                     <div className="content is-medium">
                        <img src={Nigga} style={{maxHeight: "100px"}} className="py-2 px-2" />
                        <h1>{ character.name }</h1>
                        <p>{ character.description }</p>
                    </div>
                )}
            </div>
        </section>
     );
}