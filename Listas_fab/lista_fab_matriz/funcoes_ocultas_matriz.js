import {
    map_vetor, 
    filter_vetor, 
    reduce_vetor_teste
} from './funcoes_ocultas_vetores.js'

import prompt from 'prompt-sync'
export const input = prompt()



export function gerar_matriz(){

    const qtd_colunas = Number(input('Digite a qtd de colunas da matiz: '))

    const qtd_linhas = Number(input('Digite a qtd de linhas da matriz: '))
    const matriz = new Array(qtd_colunas)

    for(let i = 0; i < qtd_colunas; i++){
        matriz[i] = new Array(qtd_linhas)
    }

    return matriz
}

export function pegar_valores_matriz(matriz){

    console.log('Digite os valores que serão inseridos na matriz: ')
    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
            matriz[i][k] = Number(input(`coluna : ${i + 1}, linha ${k + 1} : `))
        }
    }
    return matriz
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
