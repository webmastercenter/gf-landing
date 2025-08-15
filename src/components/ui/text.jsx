import * as React from 'react';

export function Title({ children, className }) {
	return <h2 className={`text-3xl font-bold mb-8 ${className || ''}`}>{children}</h2>;
}

export function Paragraph({ children, className }) {
	return <p className={`mb-6 leading-relaxed ${className || ''}`}>{children}</p>;
}
