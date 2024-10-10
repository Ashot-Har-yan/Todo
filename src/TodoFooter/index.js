import { useState} from "react";

function TodoFooter({onAdd}){
    const [text,setText] = useState('')
//     const [hiden,setHiden] = useState(todo.isCompleted)
//  const handleChangeCheckbox = ()=>{
   
//     return hiden?{todo}: setHiden({todo})
//  }
    
return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        onAdd(text)
        setText('')
    }}>
        <input type = "checkbox" 
        />
          
        
        <span>Hide all books</span>
        <label><br></br>
        <input type = 'text' placeholder = "Add a book..." 
        value = {text}
        onChange={(e)=>{
            setText(e.target.value)
        }}/>
        </label>
        <button class = "btn">Add</button>
    </form>
)
}

export default TodoFooter