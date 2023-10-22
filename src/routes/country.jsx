import React from "react";
import { Layout } from "../Layout/layout";
import { FlagDetailsContainer } from "../components/FlagDetailsContainer";
import { Navbar } from "../components/Navbar";


export function Country() {
  
  return (
    <>
      <Layout>
        <Navbar/>
        <FlagDetailsContainer/>
      </Layout>
    </>
  );
}
