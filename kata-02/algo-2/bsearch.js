/*
 * algorithm 2: recursive approach
 */

const floor = Math.floor;

module.exports = (needle, haystack) => {
	return bsearch(needle, haystack, 0, haystack.length);
};


const bsearch = (needle, haystack, start, end) => {
	if (start >= end) {
		return -1;
	}

	const cut = start + floor((end - start) / 2);

	if (haystack[cut] === needle) {
		return cut;
	} else if (haystack[cut] < needle) {
		return bsearch(needle, haystack, cut + 1, end);
	} else { /* haystack[cut] > needle */
		return bsearch(needle, haystack, start, cut);
	}
};


/**

Issues encountered
------------------
1. Floundered a bit figuring out the signature of `bsearch` (whether it should have `end` or `len` in the params)
2. Maximum call stack size exceeded...
3. Forgot to add start to the cut calculation
4. Forgot to use >= when comparing `start` and `end` at the start of `bsearch`

Evaluation
----------
- 1 is a lack of clarity of vision and planning.
- 2 and 4 speak to bounds issues, or a lack of clarity in where the fence lies when recursing.
- 3 is a lacking of linking the concept of where the cut is occurring in the array space.

Actions
-------
1. Try and pin down what a function needs to do before starting to write it. Imagine being the 'user' of the function - what signature would make the most sense?
2. When writing a recursive function, firstly try writing a single iteration. It should then be easier to work out the termination and looping conditions.
3. Mentally calculate a single example for at least two iterations to find any obvious bugs.
*/