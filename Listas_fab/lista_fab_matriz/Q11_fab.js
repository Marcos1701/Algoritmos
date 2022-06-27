import {
    input,
    gerar_matriz, 
    pegar_valores_matriz,
    pegar_matriz_transposta
} from './funcoes_ocultas_matriz.js'

function main(){

    const ordem = Number(input('Digite a ordem da matiz: '))

   let matriz = gerar_matriz(ordem, ordem)
 
    matriz = pegar_valores_matriz(matriz)

    const matriz_transposta = pegar_matriz_transposta(matriz)
    console.log('Matriz transposta: ')
    console.table(matriz_transposta)

}

main()