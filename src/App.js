import TodoInputComponent from './TodoInput';
import TodoListComponent from "./TodoList";
import { useState } from 'react';

function App() {
  const todoData = [];
  const [todos,setTodos] = useState(todoData);
  const title = "Todo List";
  console.log(todos)

   const addTaskToComplete = (addedTask) =>{
    setTodos([...todos,addedTask])
  };
  return (
    <div className ="container  mt-3">
          <h2 className="text-center">{title}</h2>
          <TodoInputComponent setTodos = {setTodos}  addTaskToComplete = { addTaskToComplete}/>
          <TodoListComponent todos ={todos} setTodos ={setTodos}/>
    </div>
  )
}

export default App;
