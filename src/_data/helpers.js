/**
 * Two Intl.DateTimeFormat objects used for formatting dates
 */
const DateFormatters = {
	year: new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		day: "numeric",
		month: "short"
	}),
	noYear: new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "short"
	}),
	short: new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "numeric",
		year: "2-digit"
	})
}

module.exports = { DateFormatters,
	/**
	 * Returns back some attributes based on whether the
	 * link is active or a parent of an active item
	 *
	 * @param {String} itemUrl The link in question
	 * @param {String} pageUrl The page context
	 * @returns {String} The attributes or empty
	 */
	getLinkActiveState(itemUrl, pageUrl) {
		let response = '';

		if (itemUrl === pageUrl) {
			response = ' aria-current="page"';
		}

		if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
			response += ' data-state="active"';
		}

		return response;
	},
};