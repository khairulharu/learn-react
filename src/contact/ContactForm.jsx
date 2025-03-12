import { useState } from "react"

export default function ContactForm() {
     let [data, setData] = useState(0)

     console.log(`data yang berubah hasil render ${data}`)

     function handleClick() {
          setData(data+1)
          console.log(`data snapshot yang mengambil current state ${data}`)
     }

     return (
          <div>
               <h1>{data}</h1>
               <button onClick={handleClick}>TMBAHKAN</button>
          </div>
     )
}