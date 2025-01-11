function questionOne() {
    let index = 13;
    let soma = 0;
    let x = 0;

    do {
        x = x + 1;
        soma = soma + x;
    } while (x < index);

    alert('A resposta para a questão 01 é:\n' + soma);
}

function questionTwo() {
    let number = parseInt(prompt("Questão 02:\nDigite um número que deseje saber se pertence a sequência de Fibonacci:"));
    let a = 0, b = 1;

    while (b <= number) {
        if (b === number) {
            alert('O número pertence à sequência de Fibonacci.');
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    alert('O número não pertence à sequência de Fibonacci.');
    return false;
}

const faturamentoDiario = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
];

function analisarFaturamento(dados) {

    const diasComFaturamento = dados.filter(dia => dia.valor > 0);


    const somaTotal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);

    const mediaMensal = somaTotal / diasComFaturamento.length;

    const valores = diasComFaturamento.map(dia => dia.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);


    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia,
        mediaMensal
    };
}

function exibirResultado() {
    const resultadoTres = analisarFaturamento(faturamentoDiario);
    alert(` Resposta da questão 03: \n Menor valor de faturamento: R$ ${resultadoTres.menorValor} \n Maior valor de faturamento: R$ ${resultadoTres.maiorValor} \n Média mensal: R$ ${resultadoTres.mediaMensal.toFixed(2)} \n Dias acima da média: ${resultadoTres.diasAcimaDaMedia}
    `);
}

// Questão 04

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

    const percentuais = Object.entries(faturamento).reduce((acc, [estado, valor]) => {
        acc[estado] = ((valor / faturamentoTotal) * 100).toFixed(2);
        return acc;
    }, {});

    return percentuais;
}


function exibirResultadoQuatro() {
    const percentuaisPorEstado = calcularPercentual(faturamentoPorEstado);

    let mensagem = "Resposta da questão 04:\nPercentual de participação por estado:\n";
    for (const estado in percentuaisPorEstado) {
        mensagem += `${estado}: ${percentuaisPorEstado[estado]}%\n`;
    }
    alert(mensagem);
}
// Questão 05

function questionFive(str) {
    let novaString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }

    return novaString;
}

function inverterPalavra() {
    const minhaString = prompt('Questão 05\nDigite uma palavra que deseje inverter: ');
    const stringInvertida = questionFive(minhaString);
    alert('A palavra invertida é: ' + stringInvertida);

}