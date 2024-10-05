
function Todoheader({onChange}){
    return(
<div class = "header">
    <h1>library</h1>
    <p>Books for Students</p>
    <input  type = "text" placeholder ="Search for books..."
    onChange={onChange}
    />
</div>
    )
}

export default Todoheader