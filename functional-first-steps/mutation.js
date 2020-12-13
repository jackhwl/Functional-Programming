function update(index, value, array) {
    // TODO return a new copy of the array with the given value at index
    return (array.slice(0, index-1).concat([value])).concat(array.slice(index)) 
  }

  function pop(array) {
    // TODO return a new array with the last old element removed
    return array.slice(0, -1)
  }