import { useState } from "react"

export default function TaskForm({handleAddTask}) {
     const [item, setItem] = useState("");

     function handleChange(e) {
          setItem(e.target.value);
     }

     function handleClick() {
          setItem("");
          handleAddTask(item)
     }

     return (
          <>
          <h1>Create Task</h1>
          <input type="text" placeholder="add task here" value={item} onChange={handleChange}/>
          <button onClick={handleClick}>Add</button>
          </>
     )
}