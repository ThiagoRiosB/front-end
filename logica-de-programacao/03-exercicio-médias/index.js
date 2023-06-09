function media() {
    var numberOne = Number(prompt('Qual a primeira nota?'))
    var numberTwo = Number(prompt('Qual a segunda nota?'))
    var numberTree = Number(prompt('Qual a terceira nota?'))
    var mediaAritmetica = (numberOne + numberTwo + numberTree) / 3
    var mediaPonderada = (numberOne * 3) + (numberTwo * 3) + (numberTree * 4)

    var divisão = mediaPonderada / 10

    var operacao = prompt(`Qual a média você deseja fazer:
    1 - Média aritmética
    2 - Média ponderada`)
    if(operacao == '1') {
    
    var resposta = document.getElementById('resposta')

    resposta.innerHTML = `A média aritmética dos valores informados é <strong>${mediaAritmetica}<strong>.`
} else if(operacao == '2') {
    
    var resposta = document.getElementById('resposta')

    resposta.innerHTML = `A média ponderada dos valores informados é <strong>${divisão}<strong>.`
}
}