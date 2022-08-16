import React from "react";
import { useState } from "react";
import '../styles/TareasList.css'
import Searcher from '../componentes/Searcher';
import NewTodoButton from '../componentes/NewTodoButton'
import Tarea from "../componentes/Tarea"
import FormularioNewTarea from "./FormularioNewTarea";
import { saveInLocalStorage,  getFromLocalStorage } from '../useLocalStorage'

//loading to-dos from local starage
const arrayToDos = getFromLocalStorage("my-todo-list_v1")



function TareasList() {
    const [todos, setTodos] = useState(arrayToDos)
    // const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);


    const deletedToDo = (text) => {
        const newToDos = todos.filter(todo => todo.text !== text);
        setTodos(newToDos);
        saveInLocalStorage("my-todo-list_v1",newToDos);
    } 
    const completeToDo = (text) => {
        const newToDos = todos.map(todo => {
            if(todo.text === text) {
                todo.completed = !todo.completed
            }
            return todo;
        })
        setTodos(newToDos);
    }
    const openNewToDoForm = () => {
        setOpenModal(!openModal)
        // <FormularioNewTarea />
    }
    const addToDo = (toDo) => {
        const newToDos = [...todos];
        newToDos.push(toDo);
        setTodos(newToDos);
        saveInLocalStorage("my-todo-list_v1",newToDos);
    }
    return (
        <div className='main-container'>
             <h2>Search todo</h2>
            <Searcher todos={todos}/>
            <div className="TareasList-container">
                <ul>
                    {
                        todos.map(todo => 
                            
                            <Tarea 
                                completed={todo.completed}
                                toDo={todo}
                                key={todo.text}
                                deletedToDo={() => deletedToDo(todo.text)}
                                completeToDo={() => completeToDo(todo.text)}
                            ></Tarea>
                        )
                    }
                    {/* <Tarea toDo={props.todoList[0]}></Tarea> */}
                </ul>
            </div>
            <NewTodoButton openNewToDoForm={() => openNewToDoForm()}/>
            {openModal && <FormularioNewTarea addToDo={addToDo}  openNewToDoForm={() => openNewToDoForm()}></FormularioNewTarea>}
        </div>
    )
}
export default TareasList;