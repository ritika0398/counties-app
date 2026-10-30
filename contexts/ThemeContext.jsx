import { Children, createContext, useState } from "react";

export const themeContext = createContext('Hello');


export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return (<themeContext.Provider value={[isDark, setIsDark]} >
        {children}
    </themeContext.Provider>)

}