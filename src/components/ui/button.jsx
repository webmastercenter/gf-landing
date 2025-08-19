import * as React from 'react';

export function LinkButton({ to, children, className, ...props }) {
	return (
		<a
			href={to}
			className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium ${className}`}
			{...props}>
			{children}
		</a>
	);
}

export function WhatsAppLinkButton({ phoneNumber, message, children, className }) {
	return (
		<LinkButton
			to={`https://wa.me/${phoneNumber}?text=${
				message ||
				'Olá, Gabriel! Vim através do site e gostaria de solicitar um orçamento dos serviços oferecidos.'
			}`}
			rel="noreferrer"
			target="_blank"
			className={className}>
			{children}
		</LinkButton>
	);
}
