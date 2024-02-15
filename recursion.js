/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
    // base case
    if (i === nums.length) return 1;
    //normal case
    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, length=0) {
    //base case
    if(i === words.length) return length;
    //normal case
    let temp = words[i].length
    if (temp > length){
        length = temp
    }
   
    return longest(words, i+1, length)
}


/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, result ="") {
    //basecase
    if (i >= str.length) return result;
    //normal case
    result += str[i]
    return everyOther(str, i+2, result)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
    let leftIdx = i;
    let rightIdx = str.length - i - 1
    //basecase
    if (leftIdx >= str.length)return true;
    console.log(str[leftIdx], str[rightIdx])
       
    //normal case
    if(str[leftIdx] !== str[rightIdx]) return false
    console.log(str[leftIdx], str[rightIdx])
    return isPalindrome(str, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
    //base case
    if(i === arr.length) return -1;
    //normal case
    if(arr[i] === val) return i;
    return(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    // Base case
    if (str.length <= 1) return str;

    // normal case
    return str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1));
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let stringsArray = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArray.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            stringsArray = stringsArray.concat(gatherStrings(obj[key]));
        }
    }

    return stringsArray;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
    //base case
    if (left > right) return -1;
    
    // normal case
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
        return mid; 
    } else if (arr[mid] < val) {
        return binarySearch(arr, val, mid + 1, right); 
    } else {
        return binarySearch(arr, val, left, mid - 1); 
    }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
