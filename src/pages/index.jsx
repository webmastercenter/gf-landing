import AboutSection from '@components/about';
import FAQSection from '@components/faq';
import Footer from '@components/footer';
import HeroSection from '@components/hero';
import Layout from '@components/layout';
import Seo from '@components/seo';
import ServicesSection from '@components/services';
import * as React from 'react';

export default function IndexPage() {
	return (
		<Layout>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<FAQSection />
			<Footer />
		</Layout>
	);
}

export const Head = () => <Seo title="Início" />;
