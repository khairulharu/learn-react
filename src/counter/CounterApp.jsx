import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
     const [show2, setShow2] = useState(true);

     function handleChange(e) {
          setShow2(e.target.checked)
     }

     return (
          <div>
               {show2 ? <Counter name="Khairul"/> : <Counter name="Lium"/>}
               <input type="checkbox" checked={show2} onChange={handleChange}/>Tampilkan show 2
          </div>
     )
}