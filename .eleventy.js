const sortByReverseDate = require('./src/utils/sort-by-reverse-date.js');

module.exports = (config) => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/files/');
    config.addPassthroughCopy('./src/css/');
    config.addPassthroughCopy('./src/scripts/');

    // Personal talks collection, sorted in reverse chronological order
    config.addCollection('talks', (collection) => {
        return sortByReverseDate(collection.getFilteredByGlob('./src/talks/*.md'));
    });

    // Talks for the seminar, sorted in reverse chronological order
    config.addCollection('seminarTalks', (collection) => {
        return sortByReverseDate(collection.getFilteredByGlob('./src/seminar-talks/*.md'));
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