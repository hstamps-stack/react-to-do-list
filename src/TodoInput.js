import { useState } from 'react';

const TodoInputComponent = ({addTaskToComplete}) =>{
    const [todoValue,setTodoValue] = useState('');

    //use function to handle submit
    const handleSubmit = (event) =>{
        event.preventDefault();
        const todoItems = {
            id: Date.now(),
            task: todoValue.toUpperCase()
        }
        addTaskToComplete(todoItems);
    };
    //use function to handle submit
    const addTask = () =>{
        //setTodos([todoValue])
    };

    return (
        <div className="row">
            <form className="mx-auto my-5 col-6"
                onSubmit ={handleSubmit}
            >
                <div className ="form-group">
                    <div className="input-group">
                        <input type="text" 
                            className="form-control"
                            placeholder="" aria-label=""
                            aria-describedby="basic-addon1"
                            value = {todoValue}
                            onChange = {(e) => setTodoValue(e.target.value)}
                        />     
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" 
                                type="submit"
                                onClick = {() => addTask()}
                                >
                                    Add
                            </button>
                        </div>
                    </div>    
                </div>
            </form>
        </div>
    )
}

export default  TodoInputComponent;