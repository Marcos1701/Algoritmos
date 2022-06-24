import {
    map_vetor, 
    filter_vetor, 
    reduce_vetor_teste
} from './funcoes_ocultas_vetores.js'

import prompt from 'prompt-sync'
export const input = prompt()



export function gerar_matriz(ordem, n){

    const matriz = new Array(ordem)

    for(let i = 0; i < ordem; i++){
        matriz[i] = new Array(n)
    }

    return matriz
}

export function pegar_valores_matriz(matriz,num_linhas){

    console.log('Digite os valores que serão inseridos na matriz: ')
    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < num_linhas; k++){
            matriz[i][j] = input(`coluna : ${i + 1}, linha ${k + 1} : `)
        }
    }
    return matriz
}


export function ordenar_array_em_ord_crescente(vetor) {

    const tamanho = vetor.length - 1
    let valor_cont = false
    let aux
    let k = 0

    for (let i = 0; i < tamanho; i++) {
        valor_cont = false

        for (let n = 0; n < tamanho - k; n++) {
            if (vetor[n] > vetor[n + 1]) {
                valor_cont = true
                aux = vetor[n]
                vetor[n] = vetor[n + 1]
                vetor[n + 1] = aux

            }
        }

        if (!valor_cont) {
            break
        }
        k++
    }

    return vetor
}


export function map_matriz(matriz, funcao){

    for(let i = 0; i < matriz.length; i++){
        matriz[i] = map_vetor(funcao, matriz[i])
    }
    return matriz
}

export function filter_matriz(matriz, funcao){

    for(let i = 0; i < matriz.length; i++){
        matriz[i] = filter_vetor(funcao, matriz[i])
    }
    return matriz
}

export function reduce_matriz_teste(matriz, funcao){

    for(let i = 0; i < matriz.length; i++){
        matriz[i] = reduce_vetor_teste(funcao, matriz[i])
    }
    return matriz
}
