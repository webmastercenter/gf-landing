import { menuItems } from '@shared/data';
import { useStaticQuery, graphql } from 'gatsby';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as React from 'react';

import { FadeIn } from './animations';
import { WhatsAppLinkButton } from './ui/button';
import { Image } from './ui/image';

export default function HeroSection() {
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<div id="home" className="relative bg-transparent text-white min-h-screen flex flex-col">
			{/* Navbar */}
			<motion.header
				initial={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
				animate={{
					backgroundColor: !menuOpen && scrolled ? 'rgba(17,24,39,1)' : 'rgba(0,0,0,0)',
					boxShadow: !menuOpen && scrolled ? '0px 4px 6px rgba(0,0,0,0.2)' : '0px 0px 0px rgba(0,0,0,0)',
					transition: { duration: 0.2, ease: 'easeInOut' },
				}}
				className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">
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
			</motion.header>

			{/* Menu Mobile */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 z-40 md:hidden">
						<motion.nav
							initial={{ y: -200 }}
							animate={{ y: 0 }}
							exit={{ y: -200 }}
							transition={{ duration: 0.2 }}
							className="bg-gray-900 text-center w-full absolute top-0 left-0 z-50 pt-16">
							<ul className="flex flex-col space-y-4 py-6">
								{menuItems.map((item) => (
									<li key={item.key}>
										<a
											href={item.to}
											className="hover:text-gray-400 block py-2"
											onClick={() => setMenuOpen(false)}>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Hero Content */}
			<FadeIn className="flex flex-1 flex-col justify-center items-center text-center px-6">
				<h2 className="text-5xl font-extrabold mb-6">Bem-vindo à {site.siteMetadata.title}</h2>
				<p className="text-lg text-gray-300 max-w-2xl mb-8 ">{site.siteMetadata.description}</p>
				<div className="flex space-x-4">
					<WhatsAppLinkButton
						phoneNumber={site.siteMetadata.contact.phone}
						className="flex items-center gap-2">
						<Image source={'icons/whatsapp.png'} className="w-6" />
						Entrar em contato
					</WhatsAppLinkButton>
				</div>
			</FadeIn>
		</div>
	);
}
