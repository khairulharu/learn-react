import { useImmerReducer } from "use-immer";
import { TaskContext, TaskDispatchContext } from "./TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
let id = 0;

const initialTaskType = [
     {id: id++, text: "learn HTML", done: false},
     {id: id++, text: "learn CSS", done: false},
     {id: id++, text: "learn JAVASCRIPT", done: false},
     {id: id++, text: "learn REACT", done: false},
]

function initialReducer(tasks, action) {
     if (action.type === "ADD_TASK") {
          tasks.push({
               id : id++,
               text : action.text,
               done : false
          })
     } else if (action.type === "EDIT_TASK") {
          const index = tasks.findIndex(note => note.id === action.id);
          tasks[index].text = action.text;
          tasks[index].done = action.done;
     } else if (action.type === "DELETE_TASK") {
          const index = tasks.findIndex(note => note.id === action.id);
          tasks.splice(index, 1);
     }
}

export default function TaskApp() {
     const [tasks, dispatch] = useImmerReducer(initialReducer, initialTaskType);

     return (
          <div>
               <TaskContext.Provider value={tasks}>
                    <TaskDispatchContext.Provider value={dispatch}>
                         <h1>Task List</h1>
                         <TaskForm />
                         <TaskList />
                    </TaskDispatchContext.Provider>
               </TaskContext.Provider>
          </div>
     )
}