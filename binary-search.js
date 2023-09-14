function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let startPos = 0;
	let endPos = array.length;
	let mid = Math.floor(startPos + endPos / 2);

	while(mid !== searchTerm) {
		if(mid > searchTerm) {
			endPos = mid;
			mid = Math.floor(startPos + endPos / 2);
		}
	}

	return null;
}

module.exports = binarySearch;
