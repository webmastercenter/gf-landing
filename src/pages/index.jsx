import * as React from "react"
import { graphql } from "gatsby"

import Seo from "@components/seo"
import HeroSection from "@components/hero"
import Footer from "@components/footer"
import ServicesSection from "@components/services"
import AboutSection from "@components/about"
import FAQSection from "@components/faq"

export default function IndexPage({ data, location }) {
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
