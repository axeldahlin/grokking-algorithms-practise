const fruits = new Set (['advokado', 'tomato', 'banana']);
const vegetables = new Set (['beets', 'carrots', 'tomato']);

// Set union
const union = new Set([...fruits, ...vegetables]);
console.log({union});

// Set intersection
const intersection = new Set (
  [...fruits].filter(x => vegetables.has(x))
);
console.log({intersection});

// Set differennce
const difference1 = new Set (
  [...fruits].filter(x => !vegetables.has(x))
);
console.log({difference1});

const difference2 = new Set (
  [...vegetables].filter(x => !fruits.has(x))
);
console.log({difference2});