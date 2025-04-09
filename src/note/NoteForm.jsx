import { useContext, useRef, useState } from "react"
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
     const [text, setText] = useState("");
     const dispatch = useContext(NotesDispatchContext);
     const focusForm = useRef(null);

     function handleChange(e) {
          setText(e.target.value)
     }

     function handleClick() {
          dispatch({
               type : "ADD_NOTE",
               text : text
          })
          setText("");
          focusForm.current.focus();
     }

     return (
          <>
          <input ref={focusForm} placeholder="Add text here" value={text} onChange={handleChange} />
          <button onClick={handleClick}>Add</button>
          </>
     )
}