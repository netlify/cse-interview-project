module.exports = {
	siteMetadata: {
		title: "Perf Project",
	},
	plugins: [
		"gatsby-plugin-perf-budgets",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "xxxx",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
		{
			resolve: "@chakra-ui/gatsby-plugin",
			options: {
				/**
				 * @property {boolean} [resetCSS=true]
				 * if false, this plugin will not use `<CSSReset />
				 */
				resetCSS: true,
				/**
				 * @property {boolean} [isUsingColorMode=true]
				 * if false, this plugin will not use <ColorModeProvider />
				 */
				isUsingColorMode: true,
				/**
				 * @property {boolean} [isBaseProvider=false]
				 * if true, will render `<ChakraBaseProvider>`
				 */
				isBaseProvider: false,
			},
		},
	],
};
