let callC = (a,b,op)=>{
    if (op =="sum"){
        return a+b
    }
    if (op == "one"){
        return a*b
    }
}

let r1 = callC(10,40,"sum");
let r2 = callC(20,40,"one");

console.log(r1)
console.log(r2)