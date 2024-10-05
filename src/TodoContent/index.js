import TodoItem from "../TodoItem";

function TodoContent({todos,onDelete}){
return(
    <div>
        <h2>Books to Read</h2>
        {
            todos.map((todo)=>{
                return (
                   <TodoItem key = {todo.id} 
                   todo = {todo}
                   onDelete={onDelete}
                    />

                )
            })

        }
    </div>
)
}

export default TodoContent;