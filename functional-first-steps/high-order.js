function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
  }

  function isEven(n) {
    // TODO your code goes here
    return n % 2 === 0;
  }

  odds = filter(n => {
    // TODO your code goes here
    return !isEven(n)
  }, wholes)

  greaterThanFour = filter(
    (n) => { return n > 4; }, // TODO replace this line
    wholes
  )

  function isPrime(n) {
    // TODO your code goes here
    if (n<2) return false;
    var counter = 0;
    for(var i = 2; i<=Math.sqrt(n); i++){
      counter += (n % i) === 0 ? 1 : 0;
    }
    return counter===0;
  }

  function map(fn, array) {
    // TODO your code goes here
    if (length(array)===0) return [];
    const firstItem = head(array);
    const firstEle = [fn(firstItem)];
    return concat(firstEle, map(fn, tail(array)));
  }

  fizzBuzz = map(n => {
    // TODO your code goes here
    if (n % 15 === 0) return 'fizzbuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz';
    return n;
  }, wholes)

  sum = reduce(
    (accumulator, value) => {
      // TODO your code here
      return accumulator + value;
    },
    0,
    wholes
  )

  max = reduce(
    (acc, val) => {
      return acc > val ? acc : val;
    }, // TODO replace this reducerFn
    0, // TODO replace this initialValue
    [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9]
  )

  