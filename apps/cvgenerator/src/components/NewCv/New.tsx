import Cvs from "../Cvs/Cvs.tsx";
import "./New.css";

const data = [
    {name:"curriculum_1", edited:"3 julio 2021", id:1},
    {name:"curriculum_2", edited:"21 julio 2021", id:2},
    {name:"curriculum_3", edited:"21 julio 2021", id:3},
    {name:"curriculum_4", edited:"21 julio 2021", id:4},
    {name:"curriculum_5", edited:"21 julio 2021", id:5},
    {name:"curriculum_6", edited:"21 julio 2021", id:6},
    {name:"curriculum_7", edited:"21 julio 2021", id:7},
    {name:"curriculum_8", edited:"21 julio 2021", id:8},
    {name:"curriculum_9", edited:"21 julio 2021", id:9},
    {name:"curriculum_10", edited:"21 julio 2021", id:10},
    {name:"curriculum_11", edited:"21 julio 2021", id:11},
    {name:"curriculum_12", edited:"21 julio 2021", id:12},
    {name:"curriculum_13", edited:"21 julio 2021", id:13},
    {name:"curriculum_14", edited:"21 julio 2021", id:14},
    {name:"curriculum_15", edited:"21 julio 2021", id:1},
];

const New = () => {
    return (
        <div className="cvs_container" >
            <div className="cvs">
                <div className= "cvs_header">
                    <h2>Documents</h2>
                    <button className="new"> + Nuevo Documento</button>
                    <label> Ordenar por:   |  <b>Fecha de edición    </b></label><br />
                </div>
                <div className="cvs_container_cards">
                    {data.map((cv) =>(
                        <Cvs
                        key={cv.id}
                        name={cv.name}
                        date={cv.edited}
                        // image={cv.previewUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default New;
