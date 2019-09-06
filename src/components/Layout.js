import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import styled, {ThemeProvider} from 'styled-components';

const theme = {
  primary: "hotpink",
  secondary: "yellow",
  neutral: 'white'
};


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

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
      </Helmet>
      <ThemeProvider theme={theme}>
        <Container>
          <Bg>
            <div className="shape" />
          </Bg>
          <Navbar />
          <div>{children}</div>
        </Container>
      </ThemeProvider>

      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${props => props.theme.neutral};
`

const Bg = styled.div`
  @keyframes expand{
    from {
      transform: scale(0.1) rotate(45deg) ;
    }
    to{
      transform: scale(25) rotate(45deg);
    }
  }
  position: fixed;
  top:0px; right:0px; bottom:0px; left: 0px;
  .shape{
    width: 100px; height: 100px;
    border: 10px solid ${props => props.theme.primary};
    animation: expand 2s  ease-in infinite;
    position: absolute;
    top: calc(50% - 50px); left: calc(50% - 50px);
    transform-origin: center center;
  }
`