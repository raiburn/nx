import { forwardRef } from "react";
import "./Cvs.css";
import  { useHistory }  from "react-router-dom";

const Cvs = forwardRef(({name, date}, ref) => {
    let history = useHistory();

    const GoCv = () =>{
      history.push("/curriculum?cv="+name);
    }

    return (
        <div>
            <label>{name}, {date}</label>
        </div>
      
    );
  }
);

export default Cvs;