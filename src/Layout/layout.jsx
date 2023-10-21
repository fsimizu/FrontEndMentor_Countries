import React, {useContext} from 'react';
// import styled from 'styled-components';
import { ThemeContextProvider } from '../components/ThemeContext/themeContext.jsx';
import { ThemeContext } from '../components/ThemeContext/themeContext.jsx';

// const Theme = styled.div`
//     background-color: ${props => (
//         props.isDarkMode ? "black" : "white"
//     )};
//     color: ${props => props.isDarkMode ? "white" : "black"};
// `

export const Layout = ({children}) =>{
    
    // const { isDarkmode } = useContext(ThemeContext);

    return(
        <div className='layout'>
            {children}
        </div>
    )
}