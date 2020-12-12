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