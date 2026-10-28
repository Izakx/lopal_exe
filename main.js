alert("Captive Portal da Padaria");

const PASSWORD = "pao123";
let attempts = 0;

while (attempts < 3) {
    console.log("bloco do while",attempts);
    const ENTEREDPASSWD = prompt("Digite a senha:");

    if (ENTEREDPASSWD === PASSWORD) {
        alert("Acesso liberado.");
        break;
    }
    attempts++;

    if (attempts === 3) {
        alert("Limite de tentativas atingido.");
    } else {
        alert("Senha incorreta.");
    }
}