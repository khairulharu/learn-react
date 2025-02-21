export function HelloWorld() {
     return (
          <div>
               <HeaderHelloWorld />
               <ParagraphHelloWorld />
          </div>
     )
}

export default HelloWorld;

export function ParagraphHelloWorld() {
     const text = "belajar react dasar halo dek, terjadi perubahan, test hot reloading"
     return (
          <div>
               <p>{ text.toUpperCase() }</p>
          </div>
          )
}

export function HeaderHelloWorld() {
     const text = "belajar react dasar hello kamu"
     return (
          <div>
               <h1 style={{ color:"red", backgroundColor:"aqua" }}>{text}</h1>

          </div>
     )
}