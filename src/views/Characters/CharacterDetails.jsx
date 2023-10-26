import RadarChart from "./RadarChart";
import useDatabase from "../../hooks/useDatabase";
import getImage from "../../utils/getImage";
import DefaultContentComponent from "../../components/DefaultContentComponent";

export default function CharacterDetails() {

    const [character] = useDatabase();
    const img = getImage(character?.src);
    
    return (
        <div className="p-6">
            {!character ? <DefaultContentComponent label={"character not found"} /> :
                <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                    <div className="column is-full">
                        <h1 className="is-size-1 has-text-weight-bold">{character.name}</h1>
                    </div>
                    <div key="test" className="column is-half" style={{ padding: "5rem" }}>
                        <div id="test" style={{ width: "500px", height: "500px" }}>
                            <RadarChart />
                        </div>
                    </div>
                    <div className="column is-half">
                        <img src={img} alt="" className="py-2 px-2" />
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