import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Socials from "./socials";
import Navbar from "./navbar";
import Footer from "./footer";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import Email from "./email";
import Loader from "./loader";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    //handleExternalLinks();
  }, [isLoading]);
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          {isLoading && isHome ? (
            <Loader finishedLoading={() => setIsLoading(true)} />
          ) : (
            <StyledContent>
              <Navbar isHome={isHome} />
              <Socials isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;
