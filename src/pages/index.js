import * as React from "react"
import styled from 'styled-components';
import Layout from "../components/layout";
import Hero from "../components/sections/hero";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  return (
    <Layout location={"/"}>
     <StyledMainContainer className="fillHeight">
      <Hero/>
      
     </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
