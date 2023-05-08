let calC = (a,b,op)=> {
if (op == "sum"){
    return a+b
}
if (op == "multi"){
    return a*b
}
}

let r1 = calC(14,50,"sum");
let r2 = calC(23,50,"multi");

console.log(r1)
console.log(r2)
