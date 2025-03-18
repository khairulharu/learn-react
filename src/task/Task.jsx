import { useState } from "react"
import { useImmer } from "use-immer";

export default function Task() {
     const [item, setItem] = useState("");
     const [items, setItems] = useImmer([]);

     function handleChange(e) {
          setItem(e.target.value);
     }

     function handleClick(e) {
          e.preventDefault()
          
          if (item === "") {
               alert("you must be type something");
          } else {
               setItems((draft) => {
                    draft.push(item);
               })
               setItem(""); 
          }
     }

     function handleButtonClick(e) {
          setItems((draft) => {
               draft.reduce()
          })
     }

     return (
          <div>
               <h1>Create Task</h1>
               <form>
                    <input type="text" placeholder="add task here" value={item} onChange={handleChange}/>
                    <button onClick={handleClick}>Add</button>
               </form>
               <h1>List Task</h1>
               <ul>
                    {items.map((item, index) =>
                         <div key={index}>
                              <li>{item}</li> <button id="index" onClick={handleButtonClick}>DELETE</button>
                         </div>
                    )}
               </ul>
          </div>
     )
}