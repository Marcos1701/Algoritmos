import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main() {



    for (let i = 1; i <= entradas[0]; i++) {

        const comidas = entradas[i].split(' ')
        const retorno = conferir_dieta(comidas[0], comidas[1])
        console.log(retorno)
    }
}

function conferir_dieta(dieta, comida_consumida) {

    let tamanho_b = comida_consumida.length

    for (let i = tamanho_b; i <= tamanho_b; i++) {
        if (!conferir_se_seguiu_a_dieta(dieta, comida_consumida[i])) {
            return 'CHEATER'
        }
        k++
    }
    return 'encaixa'
}

main()