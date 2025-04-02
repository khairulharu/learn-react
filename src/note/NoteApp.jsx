import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
     {id: id++, text: "learn HTML", done: false},
     {id: id++, text: "learn CSS", done: false},
     {id: id++, text: "learn JAVASCRIPT", done: false},
     {id: id++, text: "learn REACT", done: false},
];

function notesReducer(notes, action) {
     switch (action.type) {
          case "ADD_NOTE":
               return [
                    ...notes,
                    {
                         id: id++,
                         text: action.text,
                         done: false,
                    }
               ];
          case "CHANGE_NOTE":
               return notes.map(note => 
                    note.id === action.id ? {...note, text: action.text, done: action.done} : note
               );
          case "DELETE_NOTE":
               return notes.filter(note => note.id !== action.id);
          default:
               return notes;
     }
}

export default function NoteApp() {
     const [notes, dispatch] = useReducer(notesReducer, initialNotes);

     function handleAddNote(text) {
          dispatch({
               type: "ADD_NOTE",
               text: text
          })
     }

     function handleChangeNote(note) {
          dispatch({
               type:"CHANGE_NOTE",
               id: note.id,
               text: note.text,
               done: note.done
          })
     }

     function handleDeleteNote(note) {
          dispatch({
               type: "DELETE_NOTE",
               id: note.id
          })
     }
     return (
          <div>
               <h1>Note App</h1>
               <NoteForm onAddNote={handleAddNote}/>
               <NoteList notes={notes}
                         onChange={handleChangeNote}
                         onDelete={handleDeleteNote}/>
          </div>
     )
}