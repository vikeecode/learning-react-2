import {createContext, useContext} from "react"
 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
export  const ThemeProvider = ThemeContext.ThemeProvider

//you can write custom also
export default function useTheme(){
    return useContext(ThemeContext)
}