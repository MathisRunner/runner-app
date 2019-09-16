import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar.js'
//import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import styled, {ThemeProvider} from 'styled-components';
import NoScript from './NoScript/NoScript.js';
import './NoScript/NoScript.css';
import { globalHistory } from "@reach/router"
import getStructuredData from './../utilities/jsonld';

const theme = {
  primary: "hotpink",
  secondary: "yellow",
  neutral: 'white',
  text: 'black',
  bgShapeBorderSize: '30px'
};

  
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
        <script className='structured-data-list' type="application/ld+json">{getStructuredData()}</script>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Container>
          <Bg>
            <div className="shape shapeA" />
            <div className="shape shapeB" />
            <div className="shape shapeC" />
            <div className="shape shapeD" />
          </Bg>
          <Site>
            <Navbar className="noscriptFadeIn"  />
            <div className="noscriptFadeIn" style={{height: '100%'}} key={globalHistory.location.pathname} id="site-content">{children}</div>
            <NoScript />
          </Site>
        </Container>
      </ThemeProvider>

      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper

const Container = styled.div`

`
const Site = styled.div`
  height: 100vh;
  max-width: 100vw;
  z-index: 2;
  position: relative;
`
const Bg = styled.div`
  @keyframes expand45{
    0% {
      transform: scale(0.1) rotate(45deg);
      opacity: 0;
    }
    1% {
      transform: scale(0.1) rotate(45deg);
      opacity: 1;
    }
    20%{
      transform: scale(55) rotate(45deg) ;
    }
    21%{
      transform: scale(55) rotate(45deg);
      opacity:0;
    }
    100%{
      transform: scale(55) rotate(45deg);
    }
  }
  @keyframes expand{
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    1% {
      transform: scale(0.1);
      opacity: 1;
    }
    20%{
      transform: scale(55);
    }
    21%{
      transform: scale(55);
      opacity:0;
    }
    100%{
      transform: scale(55);
    }
  }
  position: fixed;
  top:0px; right:0px; bottom:0px; left: 0px;

  background-color: ${props => props.theme.neutral};
  z-index:0;
  .shape{
    width: 100px; height: 100px;
    position: absolute;
    top: calc(50% - 50px); left: calc(50% - 50px);
    transform-origin: center center;
    opacity: 0;
  }
  .shapeA{
    animation: expand45 10s  ease-in 0s infinite;
    border: ${props => props.theme.bgShapeBorderSize} solid ${props => props.theme.primary};
  }
  .shapeB{
    animation: expand 10s  ease-in 3s infinite;
    border: ${props => props.theme.bgShapeBorderSize} solid ${props => props.theme.secondary};
  }
  .shapeC{
    animation: expand45 10s  ease-in 5.5s infinite;
    border: ${props => props.theme.bgShapeBorderSize} solid red;
  }
  .shapeD{
    animation: expand 10s  ease-in 8s infinite;
    border: ${props => props.theme.bgShapeBorderSize} solid orange;
  }
`