const memoTable = {};

function factorial(n) {
  if (n <= 1) return 1

  if (memoTable[n]) return memoTable[n];

  memoTable[n] = n * factorial(n - 1);

  return memoTable[n];
}

console.log(factorial(100));