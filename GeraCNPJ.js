function geraCNPJ() {
    let cnpj = []

    for (let i = 0; i < 8; i++) {
        cnpj.push(Math.floor(Math.random() * 10))
    }
  
    cnpj.push(0, 0, 0, 1)

    return cnpj
}

function verificarprimeironumero(cnpj) {
    let multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj[i]) * multiplicadores1[i];
    }
    let resto = soma % 11
    let primeironumero = (resto < 2) ? 0 : 11 - resto;
    return primeironumero
}

function verificarsegundonumero(cnpj) {
    let multiplicadores2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj[i]) * multiplicadores2[i];
    }
    let resto = soma % 11
    let segundonumero = (resto < 2) ? 0 : 11 - resto;
    return segundonumero;
}

let cnpj = geraCNPJ();

let primeironumero = verificarprimeironumero(cnpj);
let segundonumero = verificarsegundonumero(cnpj);

cnpj.push(primeironumero, segundonumero);

console.log(cnpj.join(''))
