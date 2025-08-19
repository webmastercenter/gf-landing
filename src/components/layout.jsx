import * as React from 'react';

export default function Layout({ children }) {
	return (
		<div
			className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 
      bg-[length:200%_200%] animate-gradient ">
			{children}
		</div>
	);
}
