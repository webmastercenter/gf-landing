import * as React from 'react';

export function LinkButton({ to, children, ...props }) {
	return (
		<a
			href={to}
			className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium"
			{...props}>
			{children}
		</a>
	);
}

export function WhatsAppLinkButton({ phoneNumber, message, children, ...props }) {
	return (
		<a
			href={`https://wa.me/${phoneNumber}?text=${
				message || 'Olá, vim por meio do site e gostaria de solicitar um orçamento.'
			}`}
			rel="noreferrer"
			target="_blank"
			className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md font-medium"
			{...props}>
			{children}
		</a>
	);
}
