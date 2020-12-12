function iterativeFibonacci(n) {
    // TODO your code goes here
    var fcc = new Array(n);
    fcc[0]=0;
    fcc[1]=1;
    for(var i = 2; i<=n; i++)
      fcc[i] = fcc[i-1]+fcc[i-2];
    return fcc[n]
  }

  function recursiveFibonacci(n) {
    // TODO your code goes here
    if (n===0) return 0;
    if (n===1) return 1;
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
  }