import React from "react";
import { useState } from "react";

function Searcher(props) {
    const [input, setInput] =useState('');
    const [matchTodos, setMatchTodos] = useState([]);

    const onChangeSearcher = (event) => {
        setInput(event.target.value);
        updateMatchTodos(event.target.value)
    }
    const updateMatchTodos = (key) => {
        const newMatchTodos = props.todos.filter(todo => todo.text.toLowerCase().includes(key.toLowerCase()));
        setMatchTodos(newMatchTodos);
        console.log(matchTodos);
     }
    return (
        <input 
        className="input-searcher" placeholder="To-do n..." 
        value={input}
        onChange={onChangeSearcher}/>
    );
}

export default Searcher;