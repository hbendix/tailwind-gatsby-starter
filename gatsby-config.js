/* eslint-disable */
module.exports = {
	siteMetadata: {
		title: 'Repetitio',
		titleTemplate: 'Learn words and remember them',
		description:
			'Revolutionising th way you learn a language.',
		url: 'https://www.hpbl.co.uk', // No trailing slash allowed!
		image: '/Assets/Images/snape.jpg', // Path to your image you placed in the 'static' folder
		twitterUsername: '@bybendix',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/Assets`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
			  // Configure SASS to process Tailwind
			  postCssPlugins: [require('tailwindcss')],
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss',
			options: {
				printRejected: true,
				develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
			},
		},
		'gatsby-plugin-typescript',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				// icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop', 'build-javascript'],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'IBM Plex Sans',
						variants: ['200', '400', '700'],
					},
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
