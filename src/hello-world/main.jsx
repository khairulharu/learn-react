import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './main.css'
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table/>

            <AlertButton text={"Klik ME Bang"} message={"halo bang ini message"}/>
            <MyButton text={"SMashME"} onSmash={function onSmash() {alert("you smasing me")}}/>
        </Container>
     </StrictMode> 
)