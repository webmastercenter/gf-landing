import { serviceItems, equipmentItems } from '@shared/data';
import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

import { WhatsAppLinkButton } from './ui/button';
import { Image } from './ui/image';
import { Section } from './ui/section';
import { Paragraph, Title } from './ui/text';

export default function ServicesSection() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						contact {
							phone
						}
					}
				}
			}
		`
	);

	return (
		<Section id="services" className="bg-gray-100">
			<div className="container mx-auto px-6 text-center">
				<Title>Nossos Serviços</Title>
				<Paragraph className="text-justify">
					Oferecemos soluções completas para ar-condicionados e eletrodomésticos, com atendimento rápido,
					profissional e de confiança. Trabalhamos com instalação, manutenção, conserto e limpeza, sempre
					garantindo qualidade e segurança para você.
				</Paragraph>

				{/* Grid Responsiva */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{serviceItems.map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow gap-2">
							<div className="flex justify-start mb-3">
								<Image source={`icons/${item.icon}`} className="w-10" />
							</div>
							<h3 className="text-xl font-semibold mb-3">{item.label}</h3>
							<p className="text-gray-600 ">{item.description}</p>
						</div>
					))}
				</div>

				{/* Equipamentos */}
				<Title className="mt-16">Equipamentos que Atendemos</Title>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{equipmentItems.map((item, index) => (
						<div
							key={index}
							className="flex gap-4 bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition">
							<Image source={`icons/${item.icon}`} className="w-6" />
							<p className="text-gray-700 font-medium">{item.label}</p>
						</div>
					))}
				</div>

				{/* CTA */}
				<Title className="mt-16">Precisando de ajuda?</Title>
				<div className="flex flex-1 flex-col items-center">
					<div className="flex space-x-4 ">
						<WhatsAppLinkButton
							phoneNumber={site.siteMetadata.contact.phone}
							className="flex items-center gap-2 inline-block ">
							<Image source={'icons/whatsapp.png'} className="w-6" />
							Fale conosco no WhatsApp
						</WhatsAppLinkButton>
					</div>
				</div>
			</div>
		</Section>
	);
}
