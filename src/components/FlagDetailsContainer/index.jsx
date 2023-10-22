import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import './flagDetailsContainer.css';
import { ThemeContext } from "../ThemeContext/themeContext";


export function FlagDetailsContainer() {
    const { isDarkMode } = useContext(ThemeContext);
    const params = useParams();

    const [country, setCountry] = useState(() => {
        return {};
    })

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
            .then((result) => { return result.json() })
            .then((json) => {
                let countryJson = {
                    ...json[0],
                    nativeName: Object.values(json[0].name.nativeName)[0].common,
                    currency: Object.values(json[0].currencies)[0].name,
                    languages: Object.values(json[0].languages).join(', '),
                    population: json[0].population.toLocaleString()
                }

                setCountry(countryJson);

                return countryJson.borders;
            })

    }, [])



    return (
        <div className={`main_container  top_padding left_padding right_padding ${isDarkMode ? "theme_dark_background" : "theme_light_background"}`}>

            <a href="/" className={`btn back_btn ${isDarkMode ? "theme_dark_element" : "theme_light_element"}`}><span>&#8592; Back</span></a>

            <div className="flagDetails_container">
                <img src={country.flags?.svg} alt="flag" />
                
                <div className="flagDetails_text">
                    <h3>{country.name?.common}</h3>
                    <div className="flagDetails_subtext">
                        <ul>
                            <li><strong>Native Name: </strong>{country.nativeName}</li>
                            <li><strong>Population: </strong>{country.population}</li>
                            <li><strong>Region: </strong>{country.region}</li>
                            <li><strong>Sub Region: </strong>{country.subregion}</li>
                            <li><strong>Capital: </strong>{country.capital}</li>
                        </ul>
                        <ul>
                            <li><strong>Top Level Domain: </strong>{country.tld}</li>
                            <li><strong>Currencies: </strong>{country.currency}</li>
                            <li><strong>Languages: </strong>{country.languages}</li>
                        </ul>
                    </div>
                    <div className="borders_container">
                        <div className="borders_title"><strong>Border Countries:</strong></div>
                        <div className="borders_buttons">
                            { !country.borders && <div>No border countires.</div>}

                            {country.borders?.map((elem, index) => {
                                return <a href={`/country/${elem}`} key={index} className={`${isDarkMode ? "theme_dark_element" : "theme_light_element"}`}>{elem}</a>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}