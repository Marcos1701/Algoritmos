import {
    input,
    gerar_matriz, 
    pegar_valores_matriz,
    pegar_diagonal_principal_matriz,
    pegar_diagonal_secundaria,
    pegar_valores_fora_das_diagonais_matriz,
    pegar_matriz_de_ordem_especifica,
    pegar_matriz_de_tamanho_especifico
} from './funcoes_ocultas_matriz.js'

import {reduce_vetor_teste} from './funcoes_ocultas_vetores.js'

function main(){

   const matriz = pegar_valores_matriz(pegar_matriz_de_tamanho_especifico())
 
    console.table(matriz)

    const soma_diagonal_principal = reduce_vetor_teste( (x, y) => x + y, pegar_diagonal_principal_matriz(matriz))
    const soma_diagonal_secundarias = reduce_vetor_teste( (x, y) => x + y, pegar_diagonal_secundaria(matriz))
    const soma_valores_fora_das_diagonais = reduce_vetor_teste( (x, y) => x + y, pegar_valores_fora_das_diagonais_matriz(matriz))
    
    console.log(`Soma dos valores da diagonal principal = ${soma_diagonal_principal}`)
    console.log(`Soma dos valores da diagonal secundária = ${soma_diagonal_secundarias}`)
    console.log(`Soma dos valores fora das diagonais = ${soma_valores_fora_das_diagonais}`)

}

main()