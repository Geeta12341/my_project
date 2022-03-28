import React from "react";
import TodoList from "./TodoList";

function CreateTodo() {
    return (
        <>
            <div className="box">
                <div className="text-end">
                    <h2>React Todo App</h2>
                    <h4>Add New Todo</h4>
                </div>
                <div className="text-addTodo">
                    <input type="text" name="todo" placeholder="Write here..." />
                    <button className="btn-addTodo" type="button" name="addTodo">Add Todo</button>
                </div>
            </div>
            <TodoList />
        </>
    )
}
export default CreateTodo;