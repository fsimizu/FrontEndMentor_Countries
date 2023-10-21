import React, { useEffect, useState } from "react";
import './search.css';

export function Search() {

    // const search_bar = document.getElementById("search_bar");
    // console.log(search_bar);

    // const [search, setSearch] = useState(() => {
    //     return null;
    // })

    // useEffect(() => {
    //     console.log("se cambio el input");
    //     setSearch("argentina");
    // }, [search_bar])


    return (
        <div className="theme_general">
            <input id="search_bar" type="text" defaultValue="pais" />
            
            <select name="region" id="region">
                <option value="none" selected disabled hidden>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>

        </div>
    )
}