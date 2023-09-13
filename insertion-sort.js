function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	 let x;
	 let c;

	 while(c !== 0) {
		 c = 0;
		for(let i = 1; i < array.length; i++) {
			if(array[i] < array[i-1]){
				 x = array[i];
				 array[i] = array[i-1];
				 array[i-1] = x;
				 c++;
			 }
		 }
	 }
	
	 

	return array;
}

module.exports = insertionSort;
