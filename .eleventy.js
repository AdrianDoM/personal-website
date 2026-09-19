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

const sortByReverseDate = require('./src/utils/sort-by-reverse-date.js');

module.exports = async function (config) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");
    config.addPlugin(HtmlBasePlugin);

		config.addNunjucksFilter(
			"formatDate",
			function (date, formatStr) {
				return DateFormatters[formatStr].format(date);
			}
		);

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/files/');
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/scripts/');

    // Personal research talks collection, sorted in reverse chronological order
    config.addCollection('researchTalks', (collection) => {
        return sortByReverseDate(collection.getFilteredByGlob('./src/talks/*.md'))
					.filter((talk) => !talk.data.expository);
    });

		// Personal expository talks collection, sorted in reverse chronological order
    config.addCollection('expositoryTalks', (collection) => {
        return sortByReverseDate(collection.getFilteredByGlob('./src/talks/*.md'))
					.filter((talk) => talk.data.expository == true);
    });

		// Publications collection
		config.addCollection('publications', (collection) => {
				return sortByReverseDate(collection.getFilteredByGlob('./src/articles/publications/*.md'));
		});
	
		// Other writing collection
		config.addCollection('otherWriting', (collection) => {
			return sortByReverseDate(collection.getFilteredByGlob('./src/articles/other/*.md'));
		});

    // Past talks for the seminar, sorted in reverse chronological order
    config.addCollection('pastSeminarTalks', (collection) => {
        const today = new Date();
        // const yesterday = new Date();
        // yesterday.setDate(yesterday.getDate() - 1);
        return collection.getFilteredByGlob('./src/seminar-talks/*.md').filter((talk) => {
            // return talk.date < yesterday;
            return talk.date < today;
        }).sort().reverse();
    });

    // Upcoming talks for the seminar, sorted in chronological order
    config.addCollection('upcomingSeminarTalks', (collection) => {
        const today = new Date();
        // const yesterday = new Date();
        // yesterday.setDate(yesterday.getDate() - 1);
        return collection.getFilteredByGlob('./src/seminar-talks/*.md').filter((talk) => {
            // return talk.date >= yesterday;
            return talk.date >= today;
        }).sort();
    });

	return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
