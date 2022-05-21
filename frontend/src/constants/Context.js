import React,{useState,createContext} from 'react'
 

export const ThemeContext=createContext()


 const Context = (props) => {
    const [theme,setTheme]=useState("light")
    const toggleTheme=()=>{
      setTheme(theme==="light"?"dark":"light")
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
          {props.children}
    </ThemeContext.Provider>
  )
}

export default Context