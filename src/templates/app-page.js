import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Card from '../components/Card/Card.js';
import Content, { HTMLContent } from '../components/Content';

import '../components/styles.css';
import Banner from '../components/Banner/Banner';

export const AppPageTemplate = ({
  title,
  content, contentComponent,
  bannerImage
}) => {
  const PageContent = contentComponent || Content
  //console.log(`IndexPage graphql  Banner img`, banner.childImageSharp.fluid);
  return <div style={{height:'100%', background: 'white'}}>
    {/* <Banner img={banner.childImageSharp.fluid.src}>
      <Img fluid={banner.childImageSharp.fluid} />
    </Banner> */}
    {/* <Banner img={banner} />
    <Card key="index">
      <h1 className="text-section title margin-top-s">{title}</h1>
      <h2 className="text-section subheading padding-bottom-s">{heading} </h2>
      <PostContent content={content} className="no-margin"/>
    </Card> */}
     <Banner img={bannerImage} />
     <Card>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
        <PageContent className="content" content={content} />
     </Card>
  </div>
}


AppPageTemplate.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.object,
  content: PropTypes.object
}

const AppPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log(`AppPage graphql data`, data)
  return (
    <AppPageTemplate
    title={frontmatter.title}
    bannerImage={frontmatter.bannerImage}
    contentComponent={HTMLContent}
    content={html}
   // banner={data.banner}
  />
  )
}

AppPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AppPage;




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