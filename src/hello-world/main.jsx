import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './main.css'

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Container>
            <HelloWorld />
        </Container>
     </StrictMode>
)