const estadosValores = [
    { sigla: "SP", valor: 67836.43 },
    { sigla: "RJ", valor: 36678.66 },
    { sigla: "MG", valor: 29229.88 },
    { sigla: "ES", valor: 27165.48 },
    { sigla: "Outros", valor: 19849.53 }
];

function total() {
    let total = 0;
    for (let i = estadosValores.length - 1; i >= 0; i--) {
        total += estadosValores[i].valor;
    }
    return total.toFixed(2);
}

function calculaFaturamento() {
    const valorTotal = total();
    for(let i = estadosValores.length - 1; i >= 0; i--){
        estadosValores[i].percentual = `${((estadosValores[i].valor/valorTotal) * 100).toFixed(2)}%`
    }
    console.log(estadosValores);
}


calculaFaturamento();
