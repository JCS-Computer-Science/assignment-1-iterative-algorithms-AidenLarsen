function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let middle = Math.round(array.length/2);

	if(middle > searchTerm) {
		middle/2;
	} else if(middle < searchTerm) {
		middle + middle/2;
	}

	return middle;
}

module.exports = binarySearch;
