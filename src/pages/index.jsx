import AboutSection from '@components/about';
import FAQSection from '@components/faq';
import Footer from '@components/footer';
import HeroSection from '@components/hero';
import Seo from '@components/seo';
import ServicesSection from '@components/services';
import { graphql } from 'gatsby';
import * as React from 'react';

export default function IndexPage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<FAQSection />
			<Footer />
		</>
	);
}

export const Head = () => <Seo title="Início" />;

export const pageQuery = graphql`
	{
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
