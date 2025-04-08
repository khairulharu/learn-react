import { useRef, useState } from "react"
import GuestBookForm from "./GuestBookFrom";

export default function GuestBook() {
     const [name, setName] = useState("");
     const [message, setMessage] = useState("");

     const nameInput = useRef(null);

     function handleSubmit(e) {
          e.preventDefault();
          setName("");
          setMessage("");

          nameInput.current.focus();
          alert(`Name: ${name}, Message: ${message}`);
     }
     return (
          <>
               <h1>Guest Book</h1>
               <form>
                    <GuestBookForm name={name} setName={setName} ref={nameInput}/>
                    <label htmlFor="message">Message </label> <br/>
                    <textarea name="message" value={message} 
                         onChange={(e) => setMessage(e.target.value)}/> <br/>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
               </form>
          </>
     )
}