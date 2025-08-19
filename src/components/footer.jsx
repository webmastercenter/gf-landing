import { formatPhoneNumber } from '@helpers/format';
import { menuItems, regionItems, serviceItems } from '@shared/data';
import { useStaticQuery, graphql } from 'gatsby';
import { Phone, MapPin, Link, Cog } from 'lucide-react';
import * as React from 'react';

import { Image } from './ui/image';

export default function Footer() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						contact {
							name
							phone
						}
					}
				}
			}
		`
	);

	return (
		<footer className="bg-gray-800 text-gray-300 py-8">
			<div className="container mx-auto px-6">
				{/* Flex para logo + grid */}
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
					{/* Logo + descrição */}
					<div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
						<Image source={'logo-white.png'} className="w-20 mb-4" alt="Logo" />
						<p className="text-sm text-gray-400">{site.siteMetadata.description}</p>
					</div>

					{/* Grid de links */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left w-full">
						{/* Regiões de atendimento */}
						<div>
							<h3 className="flex gap-2 text-white font-semibold mb-2">
								<MapPin size={16} />
								Regiões de atendimento
							</h3>
							<ul className="space-y-1">
								{regionItems.map((item) => (
									<li key={item.key} className="justify-center md:justify-start">
										<span>{item.label}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Links úteis */}
						<div>
							<h3 className="flex gap-2 text-white font-semibold mb-2">
								<Link size={16} />
								Links
							</h3>
							<ul className="space-y-1">
								{menuItems.map((item) => (
									<li key={item.key}>
										<a href={item.to} className="hover:text-gray-400">
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Serviços */}
						<div>
							<h3 className="flex gap-2 text-white font-semibold mb-2">
								<Cog size={16} />
								Serviços
							</h3>
							<ul className="space-y-1">
								{serviceItems.map((item, index) => (
									<li key={index}>
										<span>{item.label}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Contatos */}
						<div>
							<h3 className="flex gap-2 text-white font-semibold mb-2">
								<Phone size={16} />
								Contato
							</h3>
							<ul className="space-y-1">
								<li>
									<span className="hover:text-white flex gap-2 justify-center md:justify-start">
										<span>{site.siteMetadata.contact.name}:</span>
										<span>{formatPhoneNumber(site.siteMetadata.contact.phone)}</span>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Linha inferior */}
				<div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500 w-full">
					&copy; {new Date().getFullYear()} {site.siteMetadata.title}. Todos os direitos reservados.
				</div>
			</div>
		</footer>
	);
}
