import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const qtd_elementos = Number(input('qtd elementos: '))
    const array = pegar_array(qtd_elementos)

    const array_invertido = inverter_array(array, qtd_elementos)

    console.log(array_invertido)
}

function pegar_array(qtd) {

    let array = new Array(qtd)

    for (let i = 0; i < qtd; i++) {
        array += [input(`${i} : `)]
    }
    return array
}


function inverter_array(array, qtd) {


    let array_invertido = new Array(qtd)


    for (let i = (array.length - 1); 0 <= i; i--) {
        array_invertido += array[i]
    }

    return array_invertido
}


main()