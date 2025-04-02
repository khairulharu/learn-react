import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";
import Theme from "../darktheme/Theme";

createRoot(document.getElementById("root")).render(
     <StrictMode>
         <Theme>
          <CounterApp/>
         </Theme>
     </StrictMode>
)