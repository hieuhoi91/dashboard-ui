const nums1 = [1, 2, 5];
const nums2 = [3];
var findMedianSortedArrays = function (nums1, nums2) {
  let a = [...nums1, ...nums2];
  console.log(a);
  let z = a.sort((e, g) => e - g);
  console.log(z);
  let b;
  let c;
  if (z.length % 2 != 0) {
    b = z.length / 2 - 0.5;
    console.log(b);
    return z[b];
  } else {
    b = z.length / 2 - 1;
    c = z.length / 2;
    console.log(b);
    console.log(c);
    return (z[b] + z[c]) / 2;
  }
};

console.log(findMedianSortedArrays(nums1, nums2));
