import { motion } from 'motion/react';
import * as React from 'react';

export function FadeIn({ children, className }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className={className}>
			{children}
		</motion.div>
	);
}
