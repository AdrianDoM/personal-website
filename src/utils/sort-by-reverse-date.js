/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
module.exports = (collection) =>
	collection.sort((a, b) => {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
        //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });