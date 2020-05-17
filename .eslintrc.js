module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ["plugin:react/recommended", "airbnb"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"prefer-default-export": 0,
		"no-return-assign": 0,
		"import/prefer-default-export": "off",
		"linebreak-style": [2, "windows"],
		indent: ["error", "tab", { "SwitchCase": 1 }],
		"no-tabs": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
		"react/jsx-indent": [2, 'tab'],
		"import/extensions": [
			0
		],
		"react/jsx-indent-props": [2, 'tab'],
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": 0,
		'max-len': ["error", { "code": 120 }],
		"arrow-parens": 0,
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/typedef": [
			"error",
			{
			  "arrowParameter": false,
			  "variableDeclaration": true,
			  "propertyDeclaration": true,
			  "variableDeclarationIgnoreFunction": true
			}
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src']
			}
		},
	},
};