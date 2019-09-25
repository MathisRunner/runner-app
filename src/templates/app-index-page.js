import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Card from '../components/Card/Card.js';
import Content, { HTMLContent } from '../components/Content';
import GamesList from '../components/GamesList/GameList';

import '../components/styles.css';

export const IndexPageTemplate = ({
    games, title
}) => {
  return <div style={{height:'100%'}}>
    <h1 style={{paddingTop: '150px', textAlign: 'center', color: 'black', fontSize: '3rem'}}>{title}</h1>
    <GamesList games={games} />
  </div>
}


IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
    console.log(`AppIndexPage graphql data`, data)
    return (
        <IndexPageTemplate
        games={data.allMarkdownRemark.edges}
        title={data.markdownRemark.frontmatter.title}
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
  query GameIndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "app-index-page" } }) {
        html
        frontmatter {
          title
        
        }
      }
    allMarkdownRemark(filter: {frontmatter: { templateKey: { eq: "app-page" } }}) {
        edges {
            node {
                html
                frontmatter {
                  title
                  description
                  key
                }
            }
          }

    }
  }
`

/**
 *     banner: file(sourceInstanceName: {eq: "images"}, name: {eq: "runner"}) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    },
 */