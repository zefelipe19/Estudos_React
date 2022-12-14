import React, {useState} from "react";

import TodoCard from "./TodoCard";

export default props => {

    const [Todo, setTodo] = useState([])
    const [newTodo, setNewTodo] = useState()

    function handleTodo() {
        const addTodo = newTodo

        if (addTodo != "") {
            setTodo((prevState) => [...prevState, addTodo])
        }
    }
    

    return(
        <div>
            <h3>ToDo List</h3>
            <input type="text" name="todo" id="todo" placeholder="ToDo" onChange={e => setNewTodo(e.target.value)}/>
            <input type="button" value="Add" id="addTodo" onClick={handleTodo}/>
            
            {
                Todo.map((todo) => (
                    <TodoCard title={todo} />
                ))
            }

            <hr />
        </div>
    )
}
