import * as React from 'react';

export default function AboutSection() {
	return (
		<section id="about" className="bg-gray-900 py-20">
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
					<h2 className="text-3xl text-white font-bold mb-6">Quem Somos</h2>
					<p className="text-white mb-6 leading-relaxed">
						Somos uma empresa de tecnologia dedicada a entregar soluções modernas e eficientes para nossos
						clientes. Atuamos em diversos segmentos, oferecendo desenvolvimento web, mobile, consultoria em
						TI e soluções em nuvem.
					</p>
					<p className="text-white mb-8 leading-relaxed">
						Nosso compromisso é impulsionar negócios por meio da inovação e da transformação digital, sempre
						com foco em qualidade e resultados.
					</p>
					<a
						href="#services"
						className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium">
						Conheça nossos serviços
					</a>
				</div>
			</div>
		</section>
	);
}
