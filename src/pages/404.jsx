import Seo from '@components/seo';
import LinkButton from '@components/ui/link-button';
import * as React from 'react';

export default function NotFoundPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
			<h1 className="text-6xl font-bold">404</h1>
			<p className="mt-4 text-lg">Oops! Página não encontrada.</p>

			<div className="mt-6 flex flex-col sm:flex-row gap-3">
				<LinkButton to="/">Voltar para a Home</LinkButton>
			</div>

			<p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
				Código do erro: <code className="bg-gray-200 px-1 py-0.5 rounded dark:bg-gray-800">HTTP 404</code>
			</p>
		</div>
	);
}

export const Head = () => <Seo title="404: Not Found" />;
