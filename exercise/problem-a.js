// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
function hasPairSumToK(a, k) {
    var sortedA = a.sort();
    var start = 0;
    var end = a.length - 1;
    // 
    while (start < end) {
        if (sortedA[start] + sortedA[end] === k) {
            return true;
        }
        console.log("DEBUG: " + start + " " + end + " " + (sortedA[start] + sortedA[end]));
        if (k > 0) {
            if (sortedA[start] + sortedA[end] < k) {
                start++;
            }
            else {
                end--;
            }
        }
        else {
            if (sortedA[start] + sortedA[end] > k) {
                start++;
            }
            else {
                end--;
            }
        }
    }
    return false;
}
// TESTS don't touch them
function test(actual, expected) {
    if (hasPairSumToK(actual[0], actual[1]) != expected) {
        console.log('ERROR: hasPairSumToK(', actual[0], ',', actual[1], ') should be', expected);
    }
    else {
        console.log('All tests passed!');
    }
}
// test([[], 2], false)
test([[-1, -2, -3], -5], true);
// test([[1, 2, 3, 4, 5, 7], 8], true);
// test([[1, 2, 3, 4, 96, -5], -4], true);
// test([[-1, -2, -3], 2], false);
// test([[1, 2, 3], 9], false);
// test([[7, 8, 9], 6],  false);
