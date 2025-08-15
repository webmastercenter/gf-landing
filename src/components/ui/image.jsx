import * as React from 'react';

export function Image({ source, alt, ...props }) {
	return <img src={`/img/${source}`} alt={alt || ''} {...props} />;
}
