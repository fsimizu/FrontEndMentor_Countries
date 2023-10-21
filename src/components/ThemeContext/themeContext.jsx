import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ( {children} ) => {
    
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') ? JSON.parse(localStorage.getItem('isDarkMode')) : false); //use local Storage here
    
    function toggleDarkMode() {
        setIsDarkMode(isDarkMode => !isDarkMode);
        localStorage.setItem('isDarkMode', !isDarkMode);
      }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode}}>
                {children}
        </ThemeContext.Provider>
    )
} 


