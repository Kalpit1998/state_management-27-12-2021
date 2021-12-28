import { useState } from "react";

export function GroceryInput ({getData}){
    const [text,setText] = useState("");

    const handleChange = (e) => {

        // console.log(e.target.value);
        setText(e.target.value);
    }

    const handleClick = () =>{
        getData(text);
    }

    return(
        <div className="inputWrapper">
            <input type="text" placeholder="Enter grocery" onChange={handleChange}></input>
            <button onClick={handleClick}>Add grocery</button>
        </div>
    )
}