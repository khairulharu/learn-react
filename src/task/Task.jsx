import { useContext, useState } from "react";
import { TaskDispatchContext } from "./TaskContext";

export default function Task({task}) {
     const [isEditing, setIsEditing] = useState(false);
     const dispatch = useContext(TaskDispatchContext);

     let component;

     function handleEditTask(e) {
          dispatch({
               ...task, 
               type : "EDIT_TASK",
               text : e.target.value
          })
     }

     if (isEditing) {
          component = (
               <>
               <input value={task.text} onChange={handleEditTask} />
               <button onClick={() => setIsEditing(false)} >Save</button>
               </>
          )
     } else {
          component = (
               <>
               {task.text}
               <button onClick={() => setIsEditing(true)} >Edit</button>
               </>
          )
     }

     function handleDoneTask(e) {
          dispatch({
               ...task, 
               type : "EDIT_TASK",
               done : e.target.checked
          })
     }

     function handleDelete() {
          dispatch({
               type : "DELETE_TASK",
               text : task.id
          })
     }
          
     return (
          <label>
               <input type="checkbox" checked={task.done} onChange={handleDoneTask}/>
               {component}
               <button onClick={handleDelete}>Delete</button>
          </label>
     )
}