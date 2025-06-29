import {createContext,UserContext} from 'react'
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return UserContext(ThemeContext)
}