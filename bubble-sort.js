function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    subbleBort();

    function subbleBort() {
        let x;
        let c = 0;
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                x = array[i];
                array[i] = array[i+1];
                array[i+1] = x;
                c =+ 1;
            }
        }
        if(c !== 0) {
            subbleBort();
        }
    }

	return array;
}

module.exports = bubbleSort;
