import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nigga from "../../assets/nig.png";
import Radar from "./RadarChart";
import RadarChart from "react-svg-radar-chart";
import RestChart from "./RadarChart";
import useDatabase from "../../hooks/useDatabase";
import { useEffect, useState } from "react";
import getImage from "../../utils/getImage";
import DefaultContentComponent from "../../components/DefaultContentComponent";

export default function CharacterDetails() {

    const character = useDatabase();
    const [img,setImg] = useState();
    
    useEffect(() => {
     
        setImg(getImage(character?.src))


    }, [character])
    
    return (
        <div className="container p-6">
            {!character ? <DefaultContentComponent label={"character not found"} /> :
                <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                    <div className="column is-full">
                        <h1 className="is-size-1 has-text-weight-bold">{character.name}</h1>
                    </div>
                    <div key="test" className="column is-half" style={{ padding: "5rem" }}>
                        <div id="test" style={{ width: "500px", height: "500px" }}>
                            <RestChart />
                        </div>
                    </div>
                    <div className="column is-half">
                        <img src={img} className="py-2 px-2" />
                    </div>
                    <div className="column is-full">
                        <div className="content">
                            <p>{character.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}