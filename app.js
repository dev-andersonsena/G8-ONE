alert ('boas vinda ao site')
let numeroMaximo = 5000;
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(NumeroSecreto);
let chute;
let tentativas = 1;

// quando o chute não for igual ao número secreto
while (chute!=NumeroSecreto){
    chute = prompt(`Esolha o número entre 1 a ${numeroMaximo}: `);

    if (chute == NumeroSecreto) {
        break;
    } else {
        if (chute > NumeroSecreto) {
            alert (`o número secreto é menor que o ${chute}`);
            
        } else {
            alert(`o número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }

}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if (tentativas > 1) {
    //alert (`Isso ai, voçê descobriu o número secret que é ${NumeroSecreto} com ${tentativas} tentativas `)
//} else {
 //   alert (`Isso ai, voçê descobriu o número secret que é ${NumeroSecreto} com ${tentativas}  com tentativas `)

///}