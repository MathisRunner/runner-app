import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import Card from '../components/Card/Card.js';
import Content, { HTMLContent } from '../components/Content';

import '../components/styles.css';

export const IndexPageTemplate = ({
  content,
  title,
  heading,
}) => {
  const PostContent = HTMLContent || Content;
  return <div>
    <Card>
        <h1 className="text-section title">{title}</h1>
        <h2 className="text-section subheading padding-bottom-s">{heading} </h2>
        <PostContent content={content} className="no-margin"/>
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
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        content={html}
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




export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
