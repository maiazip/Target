// Questão 01

// Abordagem 1 - laço de repetição 
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

alert('reposta da questão 01: \n' + soma);

// Abordagem 2 - função 
function calcularSoma(indice) {
    let soma = 0;
    for (let i = 1; i <= indice; i++) {
        soma += i;
    }
    alert(`A soma dos números de 1 até ${indice} é: ${soma}`);
}

// Questão 02

function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    return c === numero ? "O número pertence à sequência de Fibonacci." : "O número não pertence à sequência de Fibonacci.";
}

let numeroInformado = 21;
let resultadoDois = pertenceFibonacci(numeroInformado);
alert('Resposta da questão 02: \n' + resultadoDois);

// Questão 03

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

const resultadoTres = analisarFaturamento(faturamentoDiario);
alert(`Resposta da questão 03: 
Menor valor de faturamento: R$ ${resultadoTres.menorValor} 
Maior valor de faturamento: R$ ${resultadoTres.maiorValor} 
Média mensal: R$ ${resultadoTres.mediaMensal.toFixed(2)} 
Dias acima da média: ${resultadoTres.diasAcimaDaMedia}`);

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

const percentuaisPorEstado = calcularPercentual(faturamentoPorEstado);

let mensagem = "Resposta da questão 04:\nPercentual de participação por estado:\n";
for (const estado in percentuaisPorEstado) {
    mensagem += `${estado}: ${percentuaisPorEstado[estado]}%\n`;
}
alert(mensagem);
// Questão 05

function inverterString(str) {
    let novaString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }

    return novaString;
}

// Exemplo de uso:
const minhaString = "Hello, world!";
const stringInvertida = inverterString(minhaString);
alert('Resposta da questão 05:\n' + stringInvertida);

