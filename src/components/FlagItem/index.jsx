import React from "react";
import './flagItem.css';

export function FlagItem({country, isDarkMode}) {

    return (
        <>
        <a href={`/country/${country.ccn3}`} className={`card ${isDarkMode ? 'theme_dark_element' : 'theme_light_element'}`}>

            <img src={country.flags.svg} alt="flag" />
            <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <ul>

                <li className="card-text"><strong>Population: </strong>{country.population.toLocaleString()}</li>
                <li className="card-text"><strong>Region: </strong>{country.region}</li>
                <li className="card-text"><strong>Capital: </strong>{country.capital}</li>
                </ul>
            </div>
            
        </a>
        </>
    )
}