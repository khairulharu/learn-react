import { useEffect, useState } from "react"

export default function Theme({children}) {
     const [darkMode, setDarkMode] = useState(
          window.matchMedia("(prefers-color-scheme: dark)").matches
     )

     useEffect(() => {
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
          const handleChange = () => setDarkMode(mediaQuery.matches)

          mediaQuery.addEventListener("change", handleChange)
          return () => mediaQuery.removeEventListener("change", handleChange)
     }, [])
     return(
          <div style={ darkMode ? {backgroundColor: "black", color: "white"}: {backgroundColor: "white", color: "black"}}>
               {children}
          </div>
     )
}