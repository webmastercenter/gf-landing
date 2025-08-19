import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

import { LinkButton } from './ui/button';
import { Image } from './ui/image';
import { Section } from './ui/section';
import { Paragraph, Title } from './ui/text';

export default function AboutSection() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						contact {
							name
						}
					}
				}
			}
		`
	);

	return (
		<Section id="about" className="bg-gray-900">
			<div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
				{/* Imagem ou ilustração */}
				<div className="flex flex-1 justify-center items-center">
					<Image
						source={'perfil.jpg'}
						className="rounded-2xl shadow-lg max-w-lg"
						alt={site.siteMetadata.contact.name}
					/>
				</div>

				{/* Texto */}
				<div className="flex-1 text-center lg:text-left">
					<Title className="text-white">Quem somos</Title>
					<Paragraph className="text-white ">
						Na {site.siteMetadata.title}, somos especializados em instalação, manutenção e conserto de
						equipamentos de climatização e eletrodomésticos. Oferecemos serviços de excelência em
						ar-condicionados, incluindo instalação, limpeza, manutenção preventiva e corretiva, além de
						reparos em máquinas de lavar roupas, lava-louças, geladeiras e freezers. Nosso objetivo é
						garantir eficiência, durabilidade e funcionamento perfeito dos seus aparelhos, sempre com
						soluções rápidas, seguras e de alta qualidade.
					</Paragraph>
					<Paragraph className="text-white ">
						Nosso especialista, Gabriel, carrega uma tradição de família no setor: trabalhou a vida inteira
						com seu pai, que também seguiu os passos do avô. Com mais de 10 anos de experiência, Gabriel
						combina conhecimento técnico, dedicação e atendimento personalizado, garantindo que cada cliente
						tenha a melhor solução para suas necessidades. Compromisso, confiança e satisfação do cliente
						são os pilares do nosso trabalho.
					</Paragraph>
					<LinkButton to="/#services">Conheça nossos serviços</LinkButton>
				</div>
			</div>
		</Section>
	);
}
