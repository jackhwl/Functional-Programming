function pipeline(...functions) {
    // TODO code goes here
    if (length(functions)===0) return input => input;
    if (length(functions)===1) return input => head(functions)(input);
    return function(input) {
      return pipeline(...tail(functions))(head(functions)(input));
      // TODO more code goes here
    };
  }

  function reducePipeline(...functions) {
    return input => reduce((acc, fn) => fn(acc), input, functions);
  }