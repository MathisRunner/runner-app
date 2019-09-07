import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Card from '../components/Card/Card.js';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  intro,
}) => (
  <div>
    <Card>
        <h1 className="text-section title">{title}</h1>
        <h2 className="text-section subheading">{heading} </h2>
    </Card>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
      />
    </Layout>
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

// const Text = styled.div`


// `
// const Content = styled.div`
//   max-width: 800px;
//   top: 50%; left: 50%;
//   min-width: 50%;
//   max-height: 80vh;
//   height: 500px;
//   position: absolute;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   background-image: linear-gradient(25deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   .content{
//     width: 100%; 
//     max-height:100%;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     overflow: auto;
//   }

// `


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
