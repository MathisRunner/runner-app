import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Card from '../components/Card/Card.js';
import Content, { HTMLContent } from '../components/Content';

import '../components/styles.css';
import Banner from '../components/Banner/Banner';
import Button from '../components/Button/Button';
import NatureBg from '../components/NatureBg/NatureBg';
import CallsToAction from '../components/CallsToAction/CallsToAction';

export const IndexPageTemplate = ({
  content,
  title,
  heading,
  banner
}) => {
  const PostContent = HTMLContent || Content;
  console.log(`IndexPage graphql  Banner img`, banner.childImageSharp.fluid);
  const renderCallsToAction = () => {
      
  }
  return <div style={{height:'100%'}}>
    {/* <Banner img={banner.childImageSharp.fluid.src}>
      <Img fluid={banner.childImageSharp.fluid} />
    </Banner> */}
    {/* <Banner img={banner} />
     */}
   
    <Card key="index" center>
        <h1 className="text-section title margin-top-s">{title}</h1>
        <h2 className="text-section subheading padding-bottom-s">{heading} </h2>
        <PostContent content={content} className="no-margin"/>
        <CallsToAction />
    </Card>
  </div>
}


IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log(`IndexPage graphql data`, data)
  return (
    <IndexPageTemplate
    title={frontmatter.title}
    heading={frontmatter.heading}
    content={html}
    banner={data.banner}
  />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage;


export const pageQuery = graphql`
  query IndexPageTemplate {
    banner: file(sourceInstanceName: {eq: "images"}, name: {eq: "runner"}) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`

