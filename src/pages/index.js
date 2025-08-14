import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Seo from "@components/seo"
import HeroSection from "@components/hero"
import Footer from "@components/footer"
import ServicesSection from "@components/services"
import AboutSection from "@components/about"
import FAQSection from "@components/faq"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Title`

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </>
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
