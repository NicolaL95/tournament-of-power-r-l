import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../components/UseFetch";
import Nigga from "../../assets/nig.png";
import Radar from "./RadarChart";

export default function CharacterDetails() {
    const { id } = useParams();
    const { data: character, error, isPending } = useFetch('http://localhost:8000/characters/' + id);

    return ( 
        <div className="container p-6">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { character && (
                     <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap">
                        <div className="column is-full">
                            <h1 className="is-size-1 has-text-weight-bold">{ character.name }</h1>
                        </div>
                        <div className="column is-half" style={{padding: "5rem"}}>
                            <Radar />
                        </div>
                        <div className="column is-half">
                            <img src={Nigga} className="py-2 px-2" />
                        </div>
                        <div className="column is-full">
                            <p>{ character.description }</p>
                        </div>
                    </div>
                )}
        </div>
     );
}