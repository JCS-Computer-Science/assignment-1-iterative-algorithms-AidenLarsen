function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let y = 0;
	let x = array.length-1;
	let z = Math.floor((y + x) / 2);

	while(array[z] !== searchTerm) {
		if(array[z] > searchTerm) {
			x = z-1;
			z = Math.floor((y + x) / 2);
		} else if(array[z] < searchTerm) {
			y = z+1;
			z = Math.floor((x + y) / 2);
		}
	}

	return z;
}

module.exports = binarySearch;
