import { menuItems } from '@shared/data';
import { useStaticQuery, graphql } from 'gatsby';
import { Menu, X } from 'lucide-react';
import * as React from 'react';

import { WhatsAppLinkButton } from './ui/button';
import { Image } from './ui/image';

export default function HeroSection() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						contact {
							phone
						}
					}
				}
			}
		`
	);

	const [menuOpen, setMenuOpen] = React.useState(false);

	return (
		<div id="home" className="relative bg-gray-900 text-white min-h-screen flex flex-col">
			{/* Navbar */}
			<header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
				{/* Logo */}
				<h1 className="text-2xl font-bold">
					<Image source={'logo-white.png'} className="w-12" />
				</h1>

				{/* Menu Desktop */}
				<nav className="hidden md:flex flex-1 justify-center">
					<ul className="flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.key}>
								<a href={item.to} className="hover:text-gray-400">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Botão mobile */}
				<button className="md:hidden p-2 rounded hover:bg-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</header>

			{/* Menu Mobile */}
			{menuOpen && (
				<nav className="md:hidden bg-gray-800 text-center">
					<ul className="flex flex-col space-y-4 py-6">
						{menuItems.map((item) => (
							<li key={item.key}>
								<a href={item.to} className="hover:text-gray-400">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}

			{/* Hero Content */}
			<main className="flex flex-1 flex-col justify-center items-center text-center px-6">
				<h2 className="text-5xl font-extrabold mb-6">Bem-vindo à {site.siteMetadata.title}</h2>
				<p className="text-lg text-gray-300 max-w-2xl mb-8">{site.siteMetadata.description}</p>
				<div className="flex space-x-4">
					<WhatsAppLinkButton
						phoneNumber={site.siteMetadata.contact.phone}
						className="flex items-center gap-2">
						<Image source={'whatsapp.png'} className="w-6" />
						Entrar em contato
					</WhatsAppLinkButton>
				</div>
			</main>
		</div>
	);
}
