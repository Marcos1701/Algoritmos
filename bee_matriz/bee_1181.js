import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf8')
const entradas = input.split('\n')

function main(){

 const matriz = gerar_e_preencher_matriz(2, 3)

 const resultado_operacao = pegar_retorno(matriz, entradas[1], entradas[0])

 console.log(resultado_operacao)
}

function gerar_e_preencher_matriz(inicio, qtd_colunas, qtd_linhas = qtd_colunas){

    let matriz = new Array(qtd_colunas)

    for(let i = 0; i < qtd_colunas; i++){
        matriz[i] = new Array(qtd_linhas)
    }

   matriz = preencher_valores_matriz(matriz, inicio)

   return matriz

}

function preencher_valores_matriz(matriz, inicio){

    let index = inicio
    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
         matriz[i][k] = Number(entradas[index])
         index++
        }
    }
    return matriz
}

function pegar_retorno(matriz, operacao, linha){
    let valor_retorno

    console.log(operacao)
    if (operacao == 'S') {
        valor_retorno = soma(matriz, linha)
    }else if(operacao == 'M'){
        valor_retorno = pegar_media(matriz, linha)
    }
    return valor_retorno
}

function soma(matriz, linha){
    const l = Number(linha)
    let soma = 0

    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz[i].length; k++){
            if(k === l){
             soma += matriz[i][k]
            }
        }
    }
    return soma
}

function pegar_media(matriz, linha){
    const l = Number(linha)
    let soma_valores = 0

    for(let i = 0; i < matriz.length; i++){
        for(let k = 0; k < matriz.length; k++){
            if(k === l){
             soma_valores += matriz[i][k]
            }
        }
    }

    const media = (soma_valores / matriz.length).toFixed(1)
    return media
}

main()