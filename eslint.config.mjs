import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			prettier: prettier,
		},
		rules: {
			'prettier/prettier': 'error',
			'no-unused-vars': 'warn',
			eqeqeq: 'error',
			curly: 'error',
		},
	},
];
