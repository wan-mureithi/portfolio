import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
//import { navDelay, loaderDelay } from '..';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export const navDelay = 1000;
export const loaderDelay = 2000;

const Hero = () => {
  return (
    <StyledHeroSection>
        <TransitionGroup component={null}>
            <CSSTransition classNames="fadeup" timeout={loaderDelay}>
            <div style={{ transitionDelay: '100ms' }}>
                <h1>Hi, my name is </h1>
            </div>
            </CSSTransition>
            <CSSTransition classNames="fadeup" timeout={loaderDelay}>
            <div style={{ transitionDelay: '200ms' }}>
                <h2 className='big-heading'>Esther Mureithi </h2>
            </div>
            </CSSTransition>
            <CSSTransition classNames="fadeup" timeout={loaderDelay}>
            <div style={{ transitionDelay: '200ms' }}>
                <h3 className='big-heading'>
                    I build things for the web </h3>
            </div>
            </CSSTransition>
            <CSSTransition classNames="fadeup" timeout={loaderDelay}>
            <div style={{ transitionDelay: '200ms' }}>
                <p> I'm a software engineer specializing in building websites and web applications. 
                    Currently based in Nairobi, Kenya and open for work.
                </p>
            </div>
            </CSSTransition>
            <CSSTransition classNames="fadeup" timeout={loaderDelay}>
            <button className="email-link">
            Get in touch with me!
            </button>
            </CSSTransition>
        </TransitionGroup>
    </StyledHeroSection>
  )
}

export default Hero