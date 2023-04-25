import * as React from "react"
import styled from 'styled-components';
import Layout from "../components/layout";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  return (
    <Layout location={"/"}>
     <StyledMainContainer>
      <h1>
        somethings to start with
      </h1>
     </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
