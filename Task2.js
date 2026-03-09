

function getUniqueElements(arr1, arr2) {

  const combined = [...arr1, ...arr2];
  const count = {};

  combined.forEach(num => {
    count[num] = (count[num] || 0) + 1;
  });

  return combined.filter(num => count[num] === 1);
}

const a = [1,2,3,4];
const b = [3,4,5,6];

console.log(getUniqueElements(a,b));