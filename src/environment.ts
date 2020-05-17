const ENV: Record<string, {apiUrl: string}> = {
	dev: {
		apiUrl: 'https://repetitio-server-staging.herokuapp.com/',
	},
	prod: {
		apiUrl: '[your.production.api.here]',
	},
};

export const environmentVariables = (env = process.env.NODE_ENV) => {
	if (env === 'production') {
		return ENV.prod;
	}
	return ENV.dev;
};
