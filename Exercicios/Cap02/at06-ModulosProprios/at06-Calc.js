function soma (a, b){
    return parseInt(a)+parseInt(b)
}
function sub (a, b){
    return parseInt(a)-parseInt(b)
}
function mult (a, b){
    return parseInt(a)*parseInt(b)
}
function div (a, b){
    if (parseInt(b)>0){
        return parseInt(a)/parseInt(b)
    }
    return "Não é possível dividir por zero."
}
console.log(soma(10,10))
console.log(sub(50,10))
console.log(mult(9,8))
console.log(div(100,4))
console.log(div(10,0))