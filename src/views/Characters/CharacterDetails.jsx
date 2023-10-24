import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nigga from "../../assets/nig.png";
import Radar from "./RadarChart";
import RadarChart from "react-svg-radar-chart";
import RestChart from "./RadarChart";
import useDatabase from "../../hooks/useDatabase";

export default function CharacterDetails() {
<<<<<<< HEAD
    
    let character = useDatabase();
    character = character[0];
=======

    const { pathname } = useLocation();
    const { data } = useDatabase();

    const { id } = useParams();
>>>>>>> 053c4368c61faf1e5e3878b242c194883d220798

    return (
        <div className="container p-6">
            {       
                <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                    <div className="column is-full">
                        <h1 className="is-size-1 has-text-weight-bold">{ character.name }</h1>
                    </div>
                    <div key="test"className="column is-half" style={{padding: "5rem"}}>
                        <div id="test" style={{width: "500px", height: "500px"}}>
                            <RestChart />
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
            }
        </div>
    );
}