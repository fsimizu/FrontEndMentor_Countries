import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/themeContext";
import './navbar.css';

export function Navbar() {

    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <nav className={`navbar navbar-expand-lg left_padding right_padding ${isDarkMode ? 'theme_dark_element' : 'theme_light_element'}`}>
            <h1>Where in the world?</h1>
            <a id="darkMode_btn" onClick={() => { toggleDarkMode() }}><FontAwesomeIcon icon={faMoon} /><span id="darkMode_text">Dark Mode</span></a>
        </nav>
    )
}