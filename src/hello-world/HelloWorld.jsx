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
               <HeaderHelloWorld header={props.header}/>
               <ParagraphHelloWorld paraghraph={props.paraghraph}/>
          </div>
     )
}

export default HelloWorld;


export function HeaderHelloWorld({ header }) {
     return (
          <div>
               <h1 style={{ color:"red", backgroundColor:"aqua" }}>{ header.text.toUpperCase() }</h1>

          </div>
     )
}

export function ParagraphHelloWorld({ paraghraph }) {
     const style = {
          color: "blue",
          backgroundColor: "yellow"
     }
     return (
          <div>
               <p style={style}>{ paraghraph.text.toUpperCase()}</p>
          </div>
          )
}