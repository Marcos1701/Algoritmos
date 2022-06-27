import {
    map_vetor, 
    filter_vetor, 
    reduce_vetor_teste,
    pegar_array
} from './funcoes_ocultas_vetores.js'

import prompt from 'prompt-sync'
export const input = prompt()


/*** 
 * @param  gera uma matriz, recebendo a qtd de colunas e de linhas..
 * */
export function gerar_matriz(qtd_colunas, qtd_linhas = qtd_colunas){

    const matriz = new Array(qtd_colunas)

    for(let i = 0; i < qtd_colunas; i++){
        matriz[i] = new Array(qtd_linhas)
    }

    return matriz
}

export function remover_coluna_matriz(matriz, coluna){
    const nova_matriz = pegar_array(matriz.length - 1)
    let j = 0

    for(let i = 0; i < matriz.length; i++){
        if(i !== coluna){
            nova_matriz[j] = matriz[i]
            j++
        }
    }
    return nova_matriz
}

export function pegar_menor_e_maior_valor_matriz(matriz){
    
    let menor_valor = matriz[0][0]
    let posicao_menor_valor = [0,0]
    let maior_valor = matriz[0][0]
    let posicao_maior_valor = [0,0]

    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
            if(menor_valor > matriz [i][k]){
                menor_valor = matriz[i][k]
                posicao_menor_valor = [i,k]
            }else if(maior_valor < matriz [i][k]){
                maior_valor = matriz[i][k]
                posicao_maior_valor = [i,k]
            }
        }
    }
    console.log(`Menor valor: ${menor_valor}, localizado na ${posicao_menor_valor[0]} coluna na linha ${posicao_menor_valor[1]}`)
    console.log(`Maior valor: ${maior_valor}, localizado na ${posicao_maior_valor[0]} coluna na linha ${posicao_maior_valor[1]}`)
}

export function conferir_matriz_simétrica(matriz){

    let simetria = true
    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
            if(matriz[i][j] !== matriz[j][i]){
                return false
            }
        }
    }
    return simetria
}

export function gerar_matriz_identidade(ordem){
    const matriz_identidade = gerar_matriz(ordem)

    for(let i = 0; i < ordem; i++){
        for(let k = 0; k < ordem; k++){
            if(k === i){
                matriz_identidade[i][k] = 1
            }else{
                matriz_identidade[i][k] = 0
            }
        }
    }
    return matriz_identidade
}

export function pegar_linha_com_maior_ou_menor(matriz){

    let maior_soma = 0
    let linha_maior_soma = 0
    let menor_soma
    let linha_menor_soma = 0

    for(let i = 0; i < matriz.length; i++){
        let aux = 0
        for(let k = 0; k < matriz.length;k++){
            aux += matriz[k][i]
        }
        if(maior_soma < aux){
            maior_soma = aux
        }
    }
    return
}

function eh_maior(valor_1, valor_2){
    return valor_1 > valor_2
}

function eh_menor(valor_1, valor_2){
    return valor_1 < valor_2
}

export function pegar_matriz_de_ordem_especifica(){
    const ordem = Number(input('Digite a ordem da matiz: '))

    return gerar_matriz(ordem)
}

export function pegar_matriz_de_tamanho_especifico(){
    const colunas = Number(input('Digite a qtd de colunas da matriz: '))
    const linhas = Number(input('Digite a qtd de linhas da matriz: '))

    return gerar_matriz(colunas, linhas)
}

/*** 
 * @param recebe uma matriz vazia e pede ao usúario os 
 * elementos, para preenchê-la..
 * */
export function pegar_valores_matriz(matriz){

    console.log('Digite os valores que serão inseridos na matriz: ')
    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
            matriz[i][k] = Number(input(`coluna : ${i + 1}, linha ${k + 1} : `))
        }
    }
    return matriz
}


/*** 
 * @param  filtragem recebe uma matriz e 
 * retorna sua versão transposta..
 * */
export function pegar_matriz_transposta(matriz){

    const nova_matriz = gerar_matriz(matriz[0].length, matriz.length)

    for(let i = 0; i < nova_matriz.length; i++){
        for(let k = 0; k < nova_matriz[i].length; k++){
            nova_matriz[i][k] = matriz[k][i]
        }
    }
    return nova_matriz
}

export function pegar_determinante_matriz(matriz){

    let det = 0
    const tamanho = matriz.length
    let nova_matriz = matriz
    nova_matriz[tamanho] = matriz[0]
    nova_matriz[tamanho + 1] = matriz[1]

    if(tamanho === 1){
        return matriz[0][0]
    }

    if(tamanho === 2){
        return (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0])
    }

    for(let i = 0; i < tamanho; i++){
      
       let aux_1 = reduce_vetor_teste((x, y) => x + y, pegar_diagonal_principal_matriz(matriz))
       let aux_2 = reduce_vetor_teste((x, y) => x + y, pegar_diagonal_secundaria(matriz))
        
    }
}


/*** 
 * @param  filtragem recebe uma matriz e retorna sua diagonal principal..
 * */
export function pegar_diagonal_principal_matriz(matriz){

    const diagonal_principal = new Array(matriz.length)
    let k = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i === j){
              diagonal_principal[k] = matriz[i][j]
              k++
            }
        }
    }
    return diagonal_principal
}

/*** 
 * @param  filtragem recebe uma matriz e retorna sua diagonal secundária..
 * */
export function pegar_diagonal_secundaria(matriz){

    const diagonal_secundaria = new Array(matriz.length)
    let k = 0
    let i_linha = matriz.length - 1

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(j === i_linha){
              diagonal_secundaria[k] = matriz[i][j]
              i_linha--
              k++
            }
        }
    }
    return diagonal_secundaria
}

/***
 * @param filtragem recebe uma matriz e retorna um 
 * vetor com os elementos localizados fora das diagonais...
 * */
export function pegar_valores_fora_das_diagonais_matriz(matriz){

    let valores = new Array(0)
    let k = 0
    let i_linha = matriz.length - 1

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(j !== i_linha && i !== j){
              valores[k] = matriz[i][j]
              k++
            }
        }
        i_linha--
    }
    return valores
}


/*** 
 * @param  mapeamento recebe uma função e uma matriz e 
 * retorna a matriz transformada/mapeada
 * */
export function map_matriz(funcao, matriz){

    for(let i = 0; i < matriz.length; i++){
        matriz[i] = map_vetor(funcao, matriz[i])
    }
    return matriz
}

/*** 
 * @param  filtragem recebe uma função e uma matriz e 
 * filtra seus elementos com base na função..
 * */
export function filter_matriz(funcao, matriz){

    for(let i = 0; i < matriz.length; i++){
        matriz[i] = filter_vetor(funcao, matriz[i])
    }
    return matriz
}

/*** 
 * @param  acumulador recebe uma função e uma matriz e 
 * acumula um valor como consequência da função..
 * (não funciona perfeitamente, depende do caso...)
 * */
export function reduce_matriz_teste(funcao, matriz){

    let retorno = 0

    for(let i = 0; i < matriz.length; i++){
        retorno += reduce_vetor_teste(funcao, matriz[i])
    }
    return retorno
}
