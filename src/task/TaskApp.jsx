import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useReducer } from "react";

let id = 0;

const initialTaskType = [
     {id: id++, text: "learn HTML", done: false},
     {id: id++, text: "learn CSS", done: false},
     {id: id++, text: "learn JAVASCRIPT", done: false},
     {id: id++, text: "learn REACT", done: false},
]

function initialReducer(tasks, action) {
     switch (action.type) {
          case "ADD_TASK":
               return [
                    ...tasks,
                    {
                         id: id++,
                         text: action.text,
                         done: false,
                    }
               ];
          case "EDIT_TASK":
               return tasks.map(task => 
                    task.id === action.id ? {...task, text: action.text, done: action.done} : task
               );
          case "DELETE_TASK":
               return tasks.filter(task => task.id !== action.id);
          default:
               return tasks;
     }
}

export default function TaskApp() {
     const [tasks, dispatch] = useReducer(initialReducer, initialTaskType)

     function handleAddTask(text) {
          dispatch({
               type : "ADD_TASK",
               text : text
          })
     }

     function handleEditTask(task) {
          dispatch({
               type : "EDIT_TASK",
               id : task.id,
               text : task.text,
               done : task.done
          })
     }

     function handleDeleteTask(task) {
          dispatch({
               type : "DELETE_TASK",
               id : task.id
          })
     }

     return (
          <div>
               <h1>Task List</h1>
               <TaskForm handleAddTask={handleAddTask}/>
               <TaskList tasks={tasks} onChange={handleEditTask} onDelete={handleDeleteTask}/>
          </div>
     )
}