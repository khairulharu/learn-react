import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './main.css'
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/ToolBar";

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table/>

            <AlertButton text={"Klik ME Bang"} message={"halo bang ini message"}/>
            
            <MyButton text={"SMashME"} onSmash={() => alert("you smashing this button")}/>
            <MyButton text={"Smash ME Buddy"} onSmash={() => alert("you clicked buddy button right")}/>

            <Toolbar onClick={(e) => {
                e.stopPropagation()
                alert("Yout click toolbar")
            }}/>
        </Container>
     </StrictMode> 
)