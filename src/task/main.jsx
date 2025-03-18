import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./Task";
import './main.css'

createRoot(document.getElementById("root")).render(
     <StrictMode>
          <Task/>
     </StrictMode>
)