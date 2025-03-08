export function HelloWorld() {
     const props = {
          title: {
               text: "Kumpulan Portofolio Saya"
          },
          description: {
               text: "belajar react dasar halo dek, terjadi perubahan, test hot reloading, nama saya khairul aswad"
          }
     }
     return (
          <div>
               <HeaderHelloWorld {...props}/>
               <ParagraphHelloWorld {...props}/>
          </div>
     )
}

export default HelloWorld;


export function HeaderHelloWorld({ title }) {
     return (
          <div>
               <h1 className="title">{title.text.toUpperCase()}</h1>

          </div>
     )
}

export function ParagraphHelloWorld({ description }) {
     return (
          <div>
               <p className="description">{description.text.toUpperCase()}</p>
          </div>
          )
}