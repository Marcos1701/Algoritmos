import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main() {

    let frases_a_combinar = entradas[1].split(' ')


    for (let i = 1; i < entradas[0]; i++) {
        combinar_frases(frases_a_combinar)
        frases_a_combinar = entradas[i + 1].split(' ')
    }
}

function combinar_frases(frases) {

    const frase_1 = frases[0]
    const frase_2 = frases[1]
    const tamanho = frase_1.length + frase_2.length
    let frase_resultante = ''

    for (let i = 0; i < tamanho; i++) {
        if (frase_1[i] !== undefined && frase_2[i] !== undefined) {
            frase_resultante += frase_1[i]
            frase_resultante += frase_2[i]
        } else if (frase_1[i] === undefined) {
            frase_resultante += frase_2[i]
        } else {
            frase_resultante += frase_1[i]
        }
    }
    console.log(frase_resultante)
}


main()