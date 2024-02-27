import RadarChart from "../../components/RadarChart";
import useDatabase from "../../hooks/useDatabase";
import getImage from "../../utils/getImage";

export default function CharacterDetails() {

    const [character] = useDatabase();
    const img = getImage(character?.src);
    
    return (
        <div className="p-6">
            {!character ? <div>character not found</div> :
                <div className="columns is-flex is-flex-direction-row is-flex-wrap-wrap is-align-items-center">
                    <div className="column is-full">
                        <h1 className="is-size-1 has-text-weight-bold">{character.name}</h1>
                    </div>
                    <div className="column is-half" style={{ padding: "5rem" }}>
                        <div id="radarChart" style={{ width: "500px", height: "500px" }}>
                            <RadarChart characterSpecs2k21={character.specs2k21} characterSpecs2k24={character.specs2k24} />
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