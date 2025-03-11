import { useState } from "react"

export default function SayHelloForm() {
     let [value, setValue] = useState("Hello World")

     function handleClick(e) {
          e.preventDefault()
          setValue(document.getElementById("input_name").value)
     }

     return (
          <div>
               <form>
                    <input id="input_name"/>
                    <button onClick={handleClick}>Say Hello</button>
               </form>
               <h1 id="text_hello">Hello {value}</h1>
          </div>
     )
}