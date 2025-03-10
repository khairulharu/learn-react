export default function SearchFrom() {
     return (
          <form>
               <input type="text" />
               <button onClick={(e) => {
                    e.preventDefault()
                    alert("you searched something")
               }}>Search</button>
          </form>
     )
}