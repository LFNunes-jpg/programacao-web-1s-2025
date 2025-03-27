const express = require('express');
const calculadora = require('./util/calculadora'); 

const app = express();
const port = 3000;

// Rota para as operações
app.get('/:operacao/:a/:b', (req, res) => {
    const { operacao, a, b } = req.params;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send("Erro: parâmetros inválidos!");
    }

    let resultado;
    switch (operacao) {
        case 'somar':
            resultado = calculadora.somar(numA, numB);
            break;
        case 'subtrair':
            resultado = calculadora.subtrair(numA, numB);
            break;
        case 'multiplicar':
            resultado = calculadora.multiplicar(numA, numB);
            break;
        case 'dividir':
            resultado = calculadora.dividir(numA, numB);
            break;
        default:
            return res.status(400).send("Erro: operação inválida!");
    }

    res.send(`Resultado: ${resultado}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

console.log("Servidor funcionando!");
