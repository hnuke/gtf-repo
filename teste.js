let calculo = CalculadoraSaldoVitoria(60,40);

console.log("O Héroi tem de saldo de " + calculo + " está no nível de " + CalcularNivel(calculo))


function CalcularNivel(calculo){
    let valor = undefined;
    if (calculo > 100){
        valor = "Imortal"
    }
    else if (calculo > 90){
        valor = "Lendário"
    }
    else if (calculo > 80){
        valor = "Diamente"
    }
    else if(calculo > 50){
        valor = "Ouro"
    }
    else if (calculo > 20){
        valor = "Prata"
    }
    else if (calculo > 10){
        valor = "Bronze"
    }
    else if (calculo < 10){
        valor = "Ferro"
    }
    return valor;
}

function CalculadoraSaldoVitoria(qtdVitorias,qtdDerrotas){
    let calculo = qtdVitorias - qtdDerrotas;
    return calculo
}

