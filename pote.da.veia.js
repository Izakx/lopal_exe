let tentativas = 1
let balas = 29
let chute = Number(prompt("Quantas balas tem no pote?"))

while (chute !== balas) {
    if (chute > 50 || chute < 0) {
        alert("Número inválido")
    } else if (chute < balas) {
        alert("Mais")
    } else {
        alert("Menos")
    }

    chute = Number(prompt("Tente novamente:"))
    tentativas++
}

alert(`Parabéns! Número de tentativas: ${tentativas}`)