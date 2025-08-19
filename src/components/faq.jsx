import { faqItems } from '@shared/data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { Section } from './ui/section';
import { Title } from './ui/text';

export default function FAQSection() {
	const [openIndex, setOpenIndex] = React.useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<Section id="faq" className="bg-transparent">
			<div className="container mx-auto px-6 max-w-3xl">
				<Title className="text-white text-center">Dúvidas Frequentes</Title>

				<div className="space-y-4">
					{faqItems.map((item, index) => (
						<div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50 transition">
								{item.question}
								{openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
							</button>

							{openIndex === index && <div className="px-6 pb-4 text-gray-600">{item.answer}</div>}
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
