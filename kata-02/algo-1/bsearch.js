/*
 * algorithm 1: iterative approach
 */

const floor = Math.floor;

module.exports = function chop(needle, haystack) {
	let start = 0;
	let end = haystack.length;

	do {
		let len = end - start;
		let cut = start + floor(len / 2);

		if (haystack[cut] === needle) {
			return cut;
		} else if (haystack[cut] > needle) {
			end = cut;
		} else /* haystack[cut] < needle */ {
			start = cut + 1;
		}
	} while (start < end);

	return -1;
};


/**

Evaluation
==========

Issues encountered
- Setting cut = floor((len - 1) / 2), thinking that somehow the -1 adjustment would produce a fairer value for even length haystacks (totally breaks 1-length arrays with no matches, though)
- Setting start = cut in the "found item > needle" scenario (instead of end = cut) - 1m (silly bug)
- Setting start = cut, instead of start = cut + 1 in the "found item < needle" scenario - 6m (off by one)
- Setting cut = floor, instead of cut = start + floor (fence post)

 */