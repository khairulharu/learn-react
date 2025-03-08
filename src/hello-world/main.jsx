import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './main.css'
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table/>
        </Container>
     </StrictMode> 
)