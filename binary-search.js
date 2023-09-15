function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let y = 0;
	let x = array.length;
	let z = Math.floor(y + x / 2);

	while(z !== searchTerm) {
		if(z > searchTerm) {
			x = z;
			z = Math.floor(y + x / 2);
		} else if(z < searchTerm) {
			y = z;
			z = Math.floor(y + x / 2);
		}
	}

	return z;
}

module.exports = binarySearch;
