import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default defineConfig([
	{
		files: ['src/**/*.{js,mjs,cjs,jsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	{
		ignores: ['node_modules', 'public', '.cache'],
	},
	pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	importPlugin.flatConfigs.recommended,
	{
		rules: {
			// react
			'react/prop-types': 'off',
			// import
			'import/named': 'off',
			'import/no-unresolved': 'off',
			'import/order': [
				'error',
				{
					'groups': ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
					'newlines-between': 'always',
					'alphabetize': {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
]);
