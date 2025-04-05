import { useState } from "react";

export default function Task({task, onChange, onDelete}) {
     const [isEditing, setIsEditing] = useState(false);
     let component;

     function handleEditTask(e) {
          const newNote = {...task, text : e.target.value}
          onChange(newNote);
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
          const newNote = {...task, done : e.target.checked}
          onChange(newNote)
     }
          
     return (
          <label>
               <input type="checkbox" checked={task.done} onChange={handleDoneTask}/>
               {component}
               <button onClick={() => onDelete(task)}>Delete</button>
          </label>
     )
}