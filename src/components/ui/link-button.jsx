import * as React from 'react';

export default function LinkButton({ to, children }) {
	return (
		<a href={to} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium">
			{children}
		</a>
	);
}
