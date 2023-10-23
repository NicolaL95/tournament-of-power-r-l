import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../components/UseFetch";
import Nigga from "../../assets/nig.png";
import Radar from "./RadarChart";
import RadarChart from "react-svg-radar-chart";
import TestChart from "./TestChart";

export default function CharacterDetails() {
    const { id } = useParams();
    const { data: character, error, isPending } = useFetch('http://localhost:8000/characters/' + id);

    return ( 
        <div className="container p-6">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { character && (
                     <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                        <div className="column is-full">
                            <h1 className="is-size-1 has-text-weight-bold">{ character.name }</h1>
                        </div>
                        <div key="test"className="column is-half" style={{padding: "5rem"}}>
                            <div id="test" style={{width: "500px", height: "500px"}}>
                                <TestChart />
                            </div>
                        </div>
                        <div className="column is-half">
                            <img src={Nigga} className="py-2 px-2" />
                        </div>
                        <div className="column is-full">
                            <div className="content">
                                <p>{ character.description }</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
     );
}