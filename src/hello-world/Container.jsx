export default function Container({children}) {
     return (
          <div className="max-w-2xl">
               <h1 className="header">Khairul Aswad <span className="animated-text">Portofolios</span></h1>
               {children}
               <footer>
                    <p className="footer">Website Portofolio Khairul Aswad With Retro And Vintage Design</p>
               </footer>
          </div>
     )
}