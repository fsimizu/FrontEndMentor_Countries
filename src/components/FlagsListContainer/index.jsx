import React, { useEffect, useState, useRef } from "react";
import { FlagItem } from "../FlagItem";
import './flagsListContainer.css';

export function FlagsListContainer({ isDarkMode }) {

    const [countries, setCountries] = useState(() => {
        return [];
    })

    const [region, setRegion] = useState(() => {
        return "all";
    })

    useEffect(() => {
        inputRef.current.value = ''
        fetch(`https://restcountries.com/v3.1/${region}`)
            .then(data => data.json())
            .then(json => setCountries(json))

    }, [region]);

    const inputRef = useRef();
    const handleKeyUp = (event) => {
        if ((event.key === "Enter" || event.keyCode === 13) && inputRef.current.value) {
            fetch(`https://restcountries.com/v3.1/name/${inputRef.current.value}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else if (response.status === 404) {
                        setCountries();
                        return Promise.reject('404 - Not found')
                    } else {
                        setCountries();
                        return Promise.reject('Unexpected error: ' + response.status)
                  }
                })
                .then(json => setCountries(json))

        }
        else if ((event.key === "Enter" || event.keyCode === 13) && !inputRef.current.value) {
            fetch(`https://restcountries.com/v3.1/all`)
                .then(data => data.json())
                .then(json => setCountries(json))
        }
    }
    return (
        <>
            <div className={`main_container left_padding right_padding ${isDarkMode ? "theme_dark_background" : "theme_light_background"}`}>
                
                    {/* Search bar and filter */}
                    <div className="search_bar_container">
                            <input ref={inputRef} onKeyUp={handleKeyUp} enterkeyhint="done" id="search_bar" type="text" placeholder="&#xF002;     Search for a country..." style={{ fontFamily: "Nunito Sans, FontAwesome" }}
                                className={isDarkMode ? "theme_dark_element" : "theme_light_element"} />
                        <div>
                            <select name="region" id="region" onChange={(option) => setRegion(option.target.value)}
                                className={isDarkMode ? "theme_dark_element" : "theme_light_element"}>
                                <option value="all" defaultValue hidden>Filter by Region</option>
                                <option value="all">All</option>
                                <option value="region/africa">Africa</option>
                                <option value="region/america">America</option>
                                <option value="region/asia">Asia</option>
                                <option value="region/europe">Europe</option>
                                <option value="region/oceania">Oceania</option>
                            </select>
                        </div>
                    </div>

                    {/* Flags container */}
                    <ul className="flags_container">
                        { !countries && <div>No countries found.</div>}
                        {
                            countries?.map((country, index) => (
                                <FlagItem country={country} key={index} isDarkMode={isDarkMode} />
                            ))
                        }
                    </ul>



                </div>
            
        </>
    )
}