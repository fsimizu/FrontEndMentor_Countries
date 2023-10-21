import React , {useContext} from "react";
import { Navbar } from "../components/Navbar";
import { FlagsListContainer } from "../components/FlagsListContainer";
import { Search } from "../components/Search";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/layout";
import { ThemeContext } from "../components/ThemeContext/themeContext";


export function Root() {

  // const params = useParams();
  // const isRegionFilter = Boolean(params.region);
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
