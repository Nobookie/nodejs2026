/*
    Paa utilizar módulos ES6 (ECMAScript) 
     ao invez de módulos CommonJS
    Configurar package.json com a entrada
      "type": "module",

*/
import calc from './calculadora.js'
console.log(calc.soma(10,10))
console.log(calc.sub(50,10))
console.log(calc.mult(9,8))
console.log(calc.div(100,4))
console.log(calc.div(10,0))
