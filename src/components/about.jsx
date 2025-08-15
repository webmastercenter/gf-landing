import * as React from 'react';

import { LinkButton } from './ui/button';
import { Section } from './ui/section';
import { Paragraph, Title } from './ui/text';

export default function AboutSection() {
	return (
		<Section id="about" className="bg-gray-900">
			<div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
				{/* Imagem ou ilustração */}
				<div className="flex-1">
					<img
						src="https://via.placeholder.com/500x350"
						alt="Sobre a empresa"
						className="rounded-2xl shadow-lg"
					/>
				</div>

				{/* Texto */}
				<div className="flex-1 text-center lg:text-left">
					<Title className="text-white">Quem somos</Title>
					<Paragraph className="text-white ">
						Somos uma empresa de tecnologia dedicada a entregar soluções modernas e eficientes para nossos
						clientes. Atuamos em diversos segmentos, oferecendo desenvolvimento web, mobile, consultoria em
						TI e soluções em nuvem.
					</Paragraph>
					<Paragraph className="text-white mb-8">
						Nosso compromisso é impulsionar negócios por meio da inovação e da transformação digital, sempre
						com foco em qualidade e resultados.
					</Paragraph>
					<LinkButton to="/#services">Conheça nossos serviços</LinkButton>
				</div>
			</div>
		</Section>
	);
}
