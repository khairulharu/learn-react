import Todo from "./Todo";

export default function TodoList() {
     const data = [
          {
               isCompleted: true,
               text: "mabar epep",
          },
          {
               isCompleted: true,
               text: "mabar pabji",
          },
          {
               isCompleted: true,
               text: "mabar vscode"
          },
          {
               isCompleted: true,
               text: "mabar mswors"
          },
          {
               isCompleted: false,
               text: "mabar youtube"
          },
          {
               isCompleted: false,
               text: "mabar linkedin                             "
          }
     ]

     return (
          <ul>
               {data.map((todo, index) => (
                    ////////////////// ini spread operator ... itu spread
                    <Todo key={index} {...todo}/>
               ))}
          </ul>
     )
}