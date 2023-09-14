function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	let x = array[0];
	let y = 0;
	let z

	while(y < array.length) {
		for(let i = y; i < array.length; i++) {
			if(x > array[i]) {
				x = array[i];
				z = i;
			}
		}
		if(array[z] == x) {
			array[z] = array[y];
			array[y] = x;
		}
		y++;
		x = array[y];
	}

	return array;
}

module.exports = selectionSort;
