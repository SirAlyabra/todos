import React from "react";
import '../styles/NewTodoButton.css'

function NewTodoButton(props) {
    return (
        <button className="NewTodoButton" onClick={props.openNewToDoForm}>
            +
        </button>
    );
}

export default NewTodoButton;