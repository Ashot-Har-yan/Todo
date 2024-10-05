
function TodoItem({todo,onDelete}){
return(
    <div>
        <label>
            {todo.text}
            <button class = "btn" onClick={()=>{
                onDelete(todo)
            }}>delete</button>
        </label>
    </div>
)
}
export default TodoItem