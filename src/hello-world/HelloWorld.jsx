export function HelloWorld() {
     const props = {
          header: {
               text: "belajar react dasar halo dek, terjadi perubahan, test hot reloading"
          },
          paraghraph: {
               text: "belajar react dasar halo dek, terjadi perubahan, test hot reloading"
          }
     }
     return (
          <div>
               <HeaderHelloWorld text="dikasih bang, semangat belajar"/>
               <ParagraphHelloWorld text="dikasih juga bah"/>
          </div>
     )
}

export default HelloWorld;


export function HeaderHelloWorld({text = "lupa ngasih header bang"}) {
     return (
          <div>
               <h1 style={{ color:"red", backgroundColor:"aqua" }}>{text.toUpperCase()}</h1>

          </div>
     )
}

export function ParagraphHelloWorld({text = "lupda ngasih paraghraph"}) {
     const style = {
          color: "blue",
          backgroundColor: "yellow"
     }
     return (
          <div>
               <p style={style}>{ text.toUpperCase()}</p>
          </div>
          )
}