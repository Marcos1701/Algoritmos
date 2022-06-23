import prompt from 'prompt-sync'
export const input = prompt()

export function pegar_array(qtd){

    const array = []
   //const array = new Array(qtd)

   for(let i = 0; i < qtd; i++){
       array.push(input(`${i + 1} : `))
   }
   return array
}

export function num_ocorrencias_valor(valor,colecao){

    let contador = 0
    for(let i = 0; i < colecao.length; i++){
        if(valor === colecao[i]){
            contador++
        }
    }

    return (contador > 1)
}


export function somatorio_arrays(array_a, array_b, qtd){

    //const  array_c = []
    const  array_c = new Array(qtd * 2)

    let i_b = 0
    for(let i = 0; i < array_c.length;i++){
        if(i < qtd){
         array_c[i] = array_a[i]
        }else{
            array_c[i] = array_b[i_b]
            i_b++
        }
    }

    return array_c
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
