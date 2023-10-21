import React, { useContext } from "react";
import { Layout } from "../Layout/layout";
import { FlagsListContainer } from "../components/FlagsListContainer";
import { Navbar } from "../components/Navbar";
import { ThemeContext } from "../components/ThemeContext/themeContext";

export function Root() {

  const {isDarkMode} = useContext(ThemeContext)

  return (
    <>
      <Layout>
        <Navbar/>
        <FlagsListContainer isDarkMode={isDarkMode}/>
      </Layout>
    </>
  );
}
