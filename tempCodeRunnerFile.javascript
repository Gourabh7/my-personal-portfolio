function f() {
    const x = {};
    const y = {};
    x.a = y; // x references y
    y.a = x; // y references x
  
    return "azerty";
  }
  
  f();
  console.log(x.a)