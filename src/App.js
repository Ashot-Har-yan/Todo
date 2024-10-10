import './App.css';
import TodoContent from './TodoContent';
import TodoFooter from './TodoFooter';
import Todoheader from './Todoheader';
import {useState} from 'react';




function App() {
  const [todos,setTodos] = useState([
    {
      id:Math.random(),
      text:"Name of the Wind",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"The Wise Man's fear",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Kafka on the Shore",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"The Master and Margarita",
      isCompleted:false
    },
  ])
  
  return (
    <div className="App">
     <Todoheader onChange={(e)=>setTodos(todos.filter((todo)=>(todo.text).includes(e.target.value)))} 
    
     />
     <TodoContent todos={todos}
     onDelete={(todo)=>{
      setTodos(todos.filter((t)=>t.id!==todo.id))
     }} 
     />
     <TodoFooter onAdd={(text)=>{
      setTodos([
        ...todos,
        {
        id:Math.random(),
        text:text,
        isCompleted:false
        }
      ])
     }} 
     
     

    />
    </div>
  );
}

export default App;
