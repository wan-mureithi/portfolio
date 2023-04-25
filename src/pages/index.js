import * as React from "react"
import styled from 'styled-components';
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Jobs from "../components/sections/jobs";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  return (
    <Layout location={"/"}>
     <StyledMainContainer className="fillHeight">
      <Hero/>
      <About/>
      <Jobs/>
      <Projects/>
      <Contact/>
     </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
