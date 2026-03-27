/*
    A palavra chave é utilizada para exportar,
    ou tornar disponível, para outros modulos
    uma variavel ou função.
*/

soma=(a, b)=>{return parseInt(a)+parseInt(b)}
exports.soma = soma

sub=(a, b)=>{return parseInt(a)-parseInt(b)}
exports.sub = sub

mult=(a, b)=>{return parseInt(a)*parseInt(b)}
exports.mult = mult

div=(a, b)=>{return parseInt(b)>0? parseInt(a)/parseInt(b) : "Não é possível dividir por zero."}
exports.div = div