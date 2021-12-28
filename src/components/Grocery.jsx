import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryItem } from "./GroceryItem";
import { nanoid } from "nanoid";

export function Grocery(){

    const [list, setList] = useState([]);

    const handleClick = (data) => {
        // console.log("data in parent", data);

        const itemDetail = {
            title: data,
            id: nanoid(7)
        }

        setList([...list, itemDetail]);
    }

    const handleDelete = (id) => {
        let temp = list.filter((item) => item.id != id);
        setList(temp);
    }

    return(
        <>
            <GroceryInput getData={handleClick}/>

            
            <div className="itemWrapper">
               {list.map((e) => <GroceryItem key={e.id} id={e.id} title={e.title} status={e.status} handleDelete={handleDelete}/>)} 
            </div>
            
        </>
    )
}