let arr = [1, 2, 3, 4, 5];

let n = arr.length;
let sum = 0;
let even = 0;

for (let i = 0; i < n; i++) {
  if (i % 2 == 0) {
    sum += arr[i];
  } else if (i % 2 !== 0) {
    even += arr[i];
  }
}

console.log(`odd:${sum} even:${even}`);

// odd:4 even :6
