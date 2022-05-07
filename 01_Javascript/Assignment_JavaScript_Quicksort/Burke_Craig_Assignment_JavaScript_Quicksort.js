console.log();
console.log("********************************************************");
console.log();
// ? -- Craig Burke - Assignment: JavaScript Quicksort --
//

function quicksort(arr = [], start = 0, end = arr.length - 1) {
  // console.log(arr);
  // figure out how you would recursively use partition and quicksort
  // if the start is less thatn the end, then partiion the array, and store the index number that we get back in a variable
  if (start < end) {
    let index = partition(arr, start, end);
    // recursively call the quicksort function for the left side and also the right side
    // left side
    quicksort(arr, start, index - 1);
    // right side
    quicksort(arr, index + 1, end);
  }
  return arr;
}

// the partition function
function partition(arr = [], left = 0, right = arr.length - 1) {
  console.log(arr);
  // let pivot = arr[left];
  // start the pivot at the middle of the array
  let pivot = left + Math.floor((right - left) / 2);
  let count = left;
  for (let i = left + 1; i <= right; i++) {
    // console.log(arr[i]);
    if (arr[i] < pivot) {
      count++;
      [arr[i], arr[count]] = [arr[count], arr[i]];
    }
  }
  [arr[left], arr[count]] = [arr[count], arr[left]];
  console.log("pivot", pivot);
  console.log("count", count);
  console.log(arr);
  console.log("========================================");
  return count;
}

// console.log();
// console.log("============ partition nums 1============================");
// console.log();
// const nums1 = [5, 17, 12, 3, -9, 13, 21, 4, 27];
// partition(nums1);
console.log();
console.log("============ quicksort nums2 ============================");
console.log();
const nums2 = [11, 8, 14, 3, 6, 2, 7];
console.log("nums2", nums2);
console.log();
console.log(quicksort(nums2));
console.log();
// console.log("============ quicksort nums3 ============================");
// console.log();
// const nums3 = [-5, 17, 12, 3, 9, 13, 21, 4, 27];
// console.log("nums3", nums3);
// console.log();
// console.log(quicksort(nums3));
// console.log();
// console.log("============ quicksort nums4 ============================");
// console.log();
// const nums4 = [2, 1];
// console.log("nums4", nums4);
// console.log();
// console.log(quicksort(nums4));
// console.log();
// console.log("============ quicksort nums5 ============================");
// console.log();
// const nums5 = [11, 8, 14, 3, 6, 2, 7, 15, 1, 9, 10, 5, 4, 3, 2, 1, 0, -89, 6, -54, 678, 4, -4];
// console.log("nums5", nums5);
// console.log();
// console.log(quicksort(nums5));
