import * as React from 'react';

export function Image({ source, ...props }) {
	return <img src={`/img/${source}`} {...props} />;
}
