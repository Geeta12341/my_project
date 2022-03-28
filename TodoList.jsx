import React from "react";


function TodoList (){
    return(
<div className="todo-list">
    <ul>
         <li> 
            <div>Shopping</div>
            <div className="icon">
                <i title="Complete" className="fas fa-check circle  pointer"/>
                <i title="Delete" className="fas fa-trash alt pointer "/>
            </div>
        </li>
        <li>
            <div>Waching</div>
            <div className="icon">
                <i title="Complete" className="fas fa-check circle  pointer"/>
                <i title="Delete" className="fas fa-trash alt pointer "/>
            </div>
        </li>
        <li>
            <div>Playing</div>
            <div className="icon">
                <i title="Complete" className="fas fa-check circle  pointer"/>
                <i title="Delete" className="fas fa-trash alt pointer "/>
            </div>
        </li>
        <li>
            <div>Reading</div>
            <div className="icon">
                <i title="Complete" className="fas fa-check circle  pointer"/>
                <i title="Delete" className="fas fa-trash alt pointer "/>
            </div>
        </li>
    </ul>
    
</div>
    )
}
export default TodoList;
