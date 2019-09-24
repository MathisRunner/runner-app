import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Card from '../components/Card/Card.js';
import Content, { HTMLContent } from '../components/Content';

import '../components/styles.css';
import Banner from '../components/Banner/Banner';

export const IndexPageTemplate = ({
  content,
  title,
//   heading,
  bannerImage
}) => {
  const PostContent = HTMLContent || Content;
  //console.log(`IndexPage graphql  Banner img`, banner.childImageSharp.fluid);
  return <div style={{height:'100%'}}>
    {/* <Banner img={banner.childImageSharp.fluid.src}>
      <Img fluid={banner.childImageSharp.fluid} />
    </Banner> */}
    {/* <Banner img={banner} />
    <Card key="index">
      <h1 className="text-section title margin-top-s">{title}</h1>
      <h2 className="text-section subheading padding-bottom-s">{heading} </h2>
      <PostContent content={content} className="no-margin"/>
    </Card> */}
    <h1>An App</h1>
  </div>
}


IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.object,
  content: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log(`AppPage graphql data`, data)
  return (
    <IndexPageTemplate
    title={frontmatter.title}
    bannerImage={frontmatter.bannerImage}
    //heading={frontmatter.heading}
    content={html}
   // banner={data.banner}
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
  query AppPageTemplate {

    markdownRemark(frontmatter: { templateKey: { eq: "app-page" } }) {
      html
      frontmatter {
        title
        date
        bannerImage {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
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