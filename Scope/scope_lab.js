//global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //block scope
    var blockVar = "I'm block-scoped var";
    let blockLet = "I'm block-scoped let";
    const blockConst = "I'm block-scoped const";
}
// global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
console.log(blockVar);
//console.log(blockLet); error
//console.log(blockConst); //error

function show()
{
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

//console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
