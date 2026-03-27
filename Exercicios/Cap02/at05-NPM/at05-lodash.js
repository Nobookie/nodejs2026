/*
    Lodash é uma biblioteca Javascript que fornece um conjunto de funções 
    que facilitam a manipulação de matrizes, strings, objetos, números, etc.
*/

const _ = require('lodash'); //Importação da biblioteca lodash
//Função que gera números aleatórios
const randomNum = ()=> Math.trunc(Math.random()*100);

//Executa uma função X vezes
console.log('----Usando o lodash---')
let numRandoms = _.times(10, randomNum)

//Exibição do array - jeito convencional
console.log(typeof(numRandoms)) //Typeof exibe o tipo da variável
console.log(numRandoms)
console.log('Soma dos elementos: ', numRandoms.reduce((s, acc)=> acc+=s))
console.log(`Primeiro Elemento: ${numRandoms[0]}`)
console.log(`Ultimo Elemento: ${numRandoms[numRandoms.length-1]}\r\n`)

//Exibição do array - usando lodash
console.log('----Usando o lodash---')
console.log('Soma dos elementos: ', _.sumBy(numRandoms))
console.log(`Primeiro c/ lodash:  ${_.first(numRandoms)}`)
console.log(`Ultimo c/ lodash: ${_.last(numRandoms)}\r\n`)