import * as React from 'react';

import { Section } from './ui/section';
import { Title } from './ui/text';

export default function ServicesSection() {
	const services = [
		{
			title: 'Desenvolvimento Web',
			description: 'Sites rápidos, modernos e responsivos para o seu negócio.',
		},
		{
			title: 'Aplicativos Mobile',
			description: 'Apps nativos e híbridos que conectam sua marca ao usuário.',
		},
		{
			title: 'Soluções em Cloud',
			description: 'Escalabilidade e segurança com soluções baseadas em nuvem.',
		},
		{
			title: 'Consultoria em TI',
			description: 'Estratégias tecnológicas para otimizar seus processos.',
		},
		{
			title: 'Automação de Processos',
			description: 'Ganhe produtividade com sistemas automatizados.',
		},
	];

	return (
		<Section id="services" className="bg-gray-100">
			<div className="container mx-auto px-6 text-center">
				<Title>Nossos Serviços</Title>

				{/* Grid Responsiva */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-semibold mb-3">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
