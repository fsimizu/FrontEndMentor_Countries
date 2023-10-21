import React, {useContext} from "react";
import { Navbar } from "../components/Navbar";
import { FlagDetailsContainer } from "../components/FlagDetailsContainer";
import { Layout } from "../Layout/layout";
import { ThemeContext } from "../components/ThemeContext/themeContext";


export function Country() {
  
  const {isDarkMode} = useContext(ThemeContext)

  return (
    <>
      <Layout>
        <Navbar/>
        <FlagDetailsContainer/>
      </Layout>
    </>
  );
}
