// int INDICE = 13, 
// SOMA = 0, 
// K = 0; 
// enquanto K < INDICE 
//     faça { K = K + 1; SOMA = SOMA + K; } 
    
// imprimir(SOMA)

function somaIncremental(){
    const indice = 13;
    let soma = 0;
    let k = 0;

    while(k < indice){
        k++;
        soma = soma + k;
    }
    console.log(soma);
}

somaIncremental()
// Valor de soma será de 91