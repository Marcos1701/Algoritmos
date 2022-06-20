import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main() {



    for (let i = 1; i <= entradas[0]; i++) {

        const valores = entradas[i].split(' ')
        const retorno = encaixa_ou_n_encaixa(valores[0], valores[1])
        console.log(retorno)
    }
}

function encaixa_ou_n_encaixa(valor1, valor2) {

    let tamanho_a = valor1.length
    let tamanho_b = valor2.length
    let k = 0

    for (let i = tamanho_a - tamanho_b; i <= tamanho_a; i++) {
        if (valor1[i] !== valor2[k]) {
            return 'nao encaixa'
        }
        k++
    }
    return 'encaixa'
}

main()