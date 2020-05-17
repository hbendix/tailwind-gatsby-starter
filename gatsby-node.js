/* eslint-disable no-param-reassign */
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
	// page.matchPath is a special key that's used for matching pages
	// only on the client.
	if (page.path.match(/^\/Authentication/)) {
		page.matchPath = '/Authentication/*';
		createPage(page);
	}
};
