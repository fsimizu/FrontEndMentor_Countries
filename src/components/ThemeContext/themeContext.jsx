import { createContext, useContext, useState } from "react";


//Create the context and pass in the default values
export const ThemeContext = createContext()



// export function useThemeContext () {
//     return useContext(ThemeContext)
// }



// Creating the provider
export const ThemeContextProvider = ( {children} ) => {
    
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') ? JSON.parse(localStorage.getItem('isDarkMode')) : false); //use local Storage here

    // /localStorage.getItem('isDarkMode') ? JSON.parse(localStorage.getItem('isDarkMode')) : false
    
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


