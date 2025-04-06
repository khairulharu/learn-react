import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "./TaskContext";

export default function TaskList() {
     const tasks = useContext(TaskContext);
     return (
          <ul>
               {tasks.map(task => (
                    <li key={task.id}>
                         <Task task={task}/>
                    </li>
               ))}
          </ul>
     )
}