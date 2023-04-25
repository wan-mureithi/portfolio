import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Socials from './socials';
import Navbar from './navbar';
import Footer from './footer';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Layout = ({ children, location}) => {
    const isHome = location.pathname === '/';

  return (
    <>
    <div id="root">
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          <StyledContent>
              <Navbar isHome={isHome} />
              <Socials isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
        </ThemeProvider>

    </div>
    </>
  )
}

export default Layout