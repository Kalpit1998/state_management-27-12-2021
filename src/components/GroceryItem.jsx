export function GroceryItem ({title, id, handleDelete}){
    // console.log(id);
    return(
        <div>
            <span>{title}</span>
            <button onClick={() => handleDelete(id)}>Delete item</button>
        </div>
    )
}