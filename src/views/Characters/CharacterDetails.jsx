import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nigga from "../../assets/nig.png";
import Radar from "./RadarChart";
import RadarChart from "react-svg-radar-chart";
import RestChart from "./RadarChart";
import useDatabase from "../../hooks/useDatabase";
/* import Db from "../../assets/db.json"; */

export default function CharacterDetails() {

    const { pathname } = useLocation();
    const { data } = useDatabase();

    const { id } = useParams();

    return (
        <div className="container p-6">
            {/*       <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                        <div className="column is-full">
                            <h1 className="is-size-1 has-text-weight-bold">{ Db[id].name }</h1>
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
                                <p>{ Db[id].description }</p>
                            </div>
                        </div>
                    </div> */}
        </div>
    );
}