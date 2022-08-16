import React from "react";
import '../styles/FormNewToDo.css'

function FormularioNewTarea(props) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const getValue = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
         const newToDo = {
             text: newTodoValue,
             completed: false
         }
        console.log("onsubmit", newToDo)
        props.addToDo(newToDo)
        props.openNewToDoForm()
    }
    return (
        
            <form className="form-container" onSubmit={onSubmit}>
                <p className="create-newtodo-title">Write a new to-do</p>
                <textarea 
                    onChange={getValue}
                    placeholder="To-do ...."
                />
                <span>
                    <button type="onSumit" className="add">Add</button>
                    <button type="button" className="cancel" onClick={props.openNewToDoForm}>Return</button>
                </span>
            </form>
   
    );
}

export default FormularioNewTarea;