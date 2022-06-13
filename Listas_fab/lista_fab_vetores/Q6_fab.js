import { input, pegar_array } from "./funcoes_ocultas.js";

function main() {

    console.log('Digite o valor binário: ')
    const binario = input('=> ').split('').map(Number)

    const decimal = pegar_decimal_de_um_binario(binario)

    const hexadecimal = pegar_hex_de_um_binario(binario)

    console.log(`Decimal: ${decimal}
Hexadecimal: ${hexadecimal}`)
}


function pegar_decimal_de_um_binario(binario) {

    let decimal = 0


    let indice = 0
    for (let i = (binario.length - 1); i >= 0; i--) {
        decimal += binario[i] * 2 ** indice
        indice++
    }
    return decimal
}

function pegar_hex_de_um_binario(binario) {

    let hex = ''

    for (let i = binario.length - 1; i >= 0; i = i - 4) {


        let parte = binario.slice(i - 4, 4)
        parte = conferir_se_ha_num(parte)
        console.log(parte)

        const valor = pegar_hex_de_uma_parte_binario(parte)

        hex += conferir_valor_hex(valor)
    }

    return hex
}

function pegar_hex_de_uma_parte_binario(parte) {


    let num_hex = 0


    let indice = 0
    for (let i = parte.length - 1; i >= 0; i--) {
        num_hex += parte[i] * 2 ** indice
        indice++
    }
    return num_hex

}


function conferir_se_ha_num(vetor) {

    const novo_vetor = new Array(vetor.length)
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === undefined) {
            novo_vetor[i] = 0
        } else {
            novo_vetor[i] = vetor[i]
        }
    }
    return novo_vetor
}

function conferir_valor_hex(valor) {

    if (valor == 15) {
        return 'F'
    } else if (valor == 14) {
        return 'E'
    } else if (valor == 13) {
        return 'D'
    } else if (valor == 12) {
        return 'C'
    } else if (valor == 11) {
        return 'B'
    } else if (valor == 10) {
        return 'A'
    } else if (valor !== 0) {
        return `${valor}`
    } else {
        return ''
    }

}


main()
