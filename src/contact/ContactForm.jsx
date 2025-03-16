import { useImmer } from "use-immer"

const contactType = {
     name: "",
     message: "",
     description: {
          title: ""
     }
}

export default function ContactForm() {
     const [contact, setContact] = useImmer(contactType)
     
     function handleNameChange(e) {
          setContact(draft => {
               draft.name = e.target.value
          })
     }

     function handleMessageChange(e) {
          setContact(draft => {
               draft.message = e.target.value
          })
     }

     return (
          <div>
               <h1>Contact Form</h1>
               <form>
                    <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange}/>
                    <br />
                    <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} />
               </form>
               <h1>Contact Detail</h1>
               <p>Name: {contact.name}</p>
               <p>Message: {contact.message}</p>
          </div>
     )
}