function registro() {
    const name = prompt('Qual o seu nome?')
    const idade = Number(prompt('Qual a sua idade?'))

    if(idade <= 7 && idade >= 5) {
        alert(`${name}, registro confirmado! Você ficou na categoria: Infantil A`)
    } else if(idade <= 10 && idade >= 8) {
        alert(`${name}, registro confirmado! Você ficou na categoria: Infantil B`)
    } else if(idade <= 13 && idade >= 11) {
        alert(`${name}, registro confirmado! Você ficou na categoria: Juvenil A`)
    } else if(idade <= 17 && idade >= 14) {
        alert(`${name}, registro confirmado! Você ficou na categoria: Juvenil B`)
    } else if(idade >=18) {
        alert(`${name}, registro confirmado! Você ficou na categoria: Adulto`)
    }
}