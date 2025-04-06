import { useContext, useState } from "react"
import { TaskDispatchContext } from "./TaskContext";

export default function TaskForm() {
     const [item, setItem] = useState("");
     const dispatch = useContext(TaskDispatchContext);

     function handleChange(e) {
          setItem(e.target.value);
     }

     function handleClick() {
          dispatch({
               type : "ADD_TASK",
               text : item
          })
          setItem("");
     }

     return (
          <>
          <h1>Create Task</h1>
          <input type="text" placeholder="add task here" value={item} onChange={handleChange}/>
          <button onClick={handleClick}>Add</button>
          </>
     )
}