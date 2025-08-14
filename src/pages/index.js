import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="title-heading">{siteDescription}</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
