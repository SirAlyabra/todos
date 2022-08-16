import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
function  Tarea(props) {
    return(
        <li>
            <div className={props.completed ? "tarea-container completed" : "tarea-container"}>
                < AiOutlineCheck onClick={() => props.completeToDo()}/>
                <p>{props.toDo.text}</p>
                <AiOutlineCloseCircle className="icon-close" onClick={props.deletedToDo}/>
            </div>
        </li>
    );
}

export default Tarea;