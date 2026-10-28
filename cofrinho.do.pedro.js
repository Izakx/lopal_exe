let valor_atual = 0
let valor_adicional = 0
while(valor_atual < 300 ) {        
valor_adicional = Number(prompt("qual o valor da semana?"))
valor_atual = valor_atual + valor_adicional
alert(`saldo atual:${valor_atual}`)
}
alert("ja pode comprar")