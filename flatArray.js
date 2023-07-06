//Flatten an array

const nested = [1, [2, 3], [4, [5, 6]]];

const flattenArray = (arr) => {
  let flatted = [];

  function handleFlat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        handleFlat(arr[i]);
      } else flatted.push(arr[i]);
    }
  }

  handleFlat(arr);
  return flatted;
};

console.log(flattenArray(nested));

//Solution with depth
const nested1 = [1, [2, 3], [4, [5, 6]]];

const flattenArray1 = (arr, depth = Infinity) => {
  let flatted = [];

  function handleFlat(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth < depth) {
        handleFlat(arr[i], currentDepth + 1);
      } else {
        flatted.push(arr[i]);
      }
    }
  }

  handleFlat(arr, 0);
  return flatted;
};

console.log(flattenArray1(nested1, 1)); // Flattens up to depth 1
console.log(flattenArray1(nested1, 2)); // Flattens up to depth 2
console.log(flattenArray1(nested1)); // Flattens to full depth (default: Infinity)
