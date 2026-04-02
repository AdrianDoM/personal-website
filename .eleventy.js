const sortByReverseDate = require('./src/utils/sort-by-reverse-date.js');

module.exports = async function (config) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");
    config.addPlugin(HtmlBasePlugin);

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/files/');
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/scripts/');

    // Personal talks collection, sorted in reverse chronological order
    config.addCollection('talks', (collection) => {
        return sortByReverseDate(collection.getFilteredByGlob('./src/talks/*.md'));
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
