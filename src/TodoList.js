import { useState } from 'react';
const TodoListComponent = ({todos,setTodos}) =>{
    const [checkBox, setCheckBox] = useState(false);
    console.log(checkBox);

    const deleteTask = (taskId) =>{
        const updateTodos = todos.filter(todo => todo.id !== taskId);
        setTodos([...updateTodos]);
    }
    return (
        <div className=" mx-auto" style={{width:"25rem"}}>
            <ul className="list-group list-group-flush text-white">
                {todos.map((todo,i) =>{
                return(
                    <li key = {i} className="list-unstyled list-group-item font-weight-bold card-body bg-dark">
                        <input 
                        type = "checkbox" 
                        className="m-3"
                        checked = {checkBox}
                        onChange ={ (e) => setCheckBox(e.target.checked)}
                        />
                        {todo.task}
                            <button
                            className ="btn btn-danger btn-sm m-3 font-weight-bold"
                            onClick ={() => deleteTask(todo.id)}
                            >
                            Delete
                            </button>
                            <div className="text-color-success">{checkBox?`${todo.task} is completed`: null}</div>
                    </li>
                    )
                })}       
         </ul>
    </div>
    )
}

export default TodoListComponent;