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
