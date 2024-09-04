const fs = require('fs');

fs.readFile('dados.json', 'utf-8', (err, data) => {
    if(err) {
        console.error("Erro ao ler o arquivo " , err);
        return
    }

    const dados = JSON.parse(data)
    MenorValor(dados)
    MaiorValor(dados)
    DiasMaiorQueMedia(dados)
})

function MenorValor(dados){
    let menor = dados[0].valor;
    let indiceMenor = 0
    for(let i = 0; i < dados.length; i++){
        if(dados[i].valor < menor && dados[i].valor !== 0){
            menor = dados[i].valor;
            indiceMenor = i;
        }
    }
    console.log("O menor valor é: " + menor.toFixed(2) + " do dia " + (indiceMenor+1) )
}

function MaiorValor(dados){
    let maior = dados[0].valor;
    let indiceMaior = 0
    for(let i = 0; i < dados.length; i++){
        if(dados[i].valor > maior && dados[i].valor !== 0){
            maior = dados[i].valor;
            indiceMaior = i;
        }
    }
    console.log("O maior valor é: " + maior.toFixed(2) + " do dia " + (indiceMaior+1) )
}

function Media(dados){
    let soma = 0;
    let contador = 0;
    for(let i = 0; i < dados.length; i++){
        if(dados[i].valor !== 0){
            soma += dados[i].valor;
            contador++;
        }
    }
    let media = soma / contador
    return((media))
}

function DiasMaiorQueMedia(dados){
    let contador = 0;
    const media = Media(dados)
    for (let i = 0; i < dados.length; i++) {
        if(dados[i].valor > media){
            contador++;
        }
    }
    console.log("O número de dias que tiveram um faturamento maior que a média é " + contador)
}