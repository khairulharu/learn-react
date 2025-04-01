import { useState } from "react"

export default function CounterLium({name}) {
     const [count, setCount] = useState(0);

     function handleClick() {
          setCount(count + 1);
     }

     return (
          <div>
               <h1>
                    Counter { name } : { count }
               </h1>
               <button onClick={handleClick}>Add Counter + 1</button>
          </div>
     )
}