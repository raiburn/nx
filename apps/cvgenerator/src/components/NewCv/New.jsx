import Cvs from "../Cvs/Cvs";
import "./New.css";

const data = [
    {name:"curriculum_1", edited:"21 julio 2021", id:1},
    {name:"curriculum_2", edited:"21 julio 2021", id:2}
];
const New = () => {
    return (
        <div className="cvs_container" >
            <div className="cvs">
                <div className= "cvs_header">
                    <h2>Documents</h2>
                    <button className="new"> +Nuevo Documento</button>
                    <label> Ordenar por  | <b>Fecha de edición  </b></label><br />
                    {data.map((cv) =>(
                        <Cvs
                        key={cv.id}
                        name={cv.name}
                        date={cv.edited}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default New;