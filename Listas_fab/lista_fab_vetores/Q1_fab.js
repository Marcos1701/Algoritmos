import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const qtd_elementos = Number(input('qtd elementos: '))
    const array = pegar_array(qtd_elementos)

    const array_invertido = inverter_array(array, qtd_elementos)

    console.log(array_invertido)
}

function pegar_array(qtd) {

    let array = new Array(qtd - 1)

    for (let i = 0; i < qtd; i++) {
        array[i] = input(`${i + 1} : `)
    }
    return array
}

function inverter_array(array, qtd) {


    //const array_invertido = new Array(qtd)
    const array_invertido = []

   let indice = 0
    for (let i = (array.length - 1); i >= 0;i--){
        //array_invertido[indice] = array[i]
        array_invertido.push(array[i])
        indice++
    }

    return array_invertido
}


main()