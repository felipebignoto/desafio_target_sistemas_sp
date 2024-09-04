function fibonacci(valor){
    console.log("Verificando se o valor " + valor + " pertence a sequência Fibonacci");
    let a = 0;
    let b = 1;
    let c = 1
    while(c <= valor){
        c = a + b;
        if(c === valor){
            console.log("O valor: " + valor + " pertence a sequência Fibonacci");
            return null
        }
        a = b;
        b = c;
    }
    console.log("O valor: " + valor + " não pertence a sequência Fibonacci");
}

const numero = 21
fibonacci(numero)