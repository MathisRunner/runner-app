import React from 'react'
import PropTypes from 'prop-types'
import { AppPageTemplate } from '../../templates/app-page'

const AppPagePreview = ({ entry, widgetFor }) => (
  <AppPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'Description'])}
    bannerImage={widgetFor('bannerImage')}
    content={widgetFor('body')}
  />
)

AppPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview

/**
 * 
 * const AppPage = ({ data }) => {
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

 * 
collections:
  - name: "game"
    label: "game"
    folder: "src/pages/app"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Template Key", name: "templateKey", widget: "hidden", default: "app-page"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Banner Image", name: "bannerImage", widget: image}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Tags", name: "tags", widget: "list"}

  - name: "pages"
    label: "Pages"
    files:
      - file: "src/pages/index.md"
        label: "Landing Page"
        name: "index"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "index-page"}
          - {label: Title, name: title, widget: string}
          - {label: Heading, name: heading, widget: string}
          - {label: "Body", name: "body", widget: "markdown"}
      - file: "src/pages/about/index.md"
        label: "About"
        name: "about"
        fields:
          - {label: "Template Key", name: "templateKey", widget: "hidden", default: "about-page"}
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Body", name: "body", widget: "markdown"}

 */