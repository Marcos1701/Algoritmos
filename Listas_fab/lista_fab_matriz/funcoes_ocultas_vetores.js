import prompt from "prompt-sync"
const input = prompt()

export function pegar_array(qtd){

    //const array = []
   const array = new Array(qtd)

   for(let i = 0; i < qtd; i++){
       array[i] = input(`${i + 1} : `)
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

export function ordenar_array(vetor, org = 'cresc') {

    const tamanho = vetor.length - 1
    let valor_cont = false
    const funcao_auxiliar = org == 'cresc' ? eh_maior : eh_menor
    let aux
    let k = 0

    for (let i = 0; i < tamanho; i++) {
        valor_cont = false

        for (let n = 0; n < tamanho - k; n++) {
            if (funcao_auxiliar(vetor[n], vetor[n + 1])) {
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

function eh_maior(valor_1, valor_2){
    return valor_1 > valor_2
}

function eh_menor(valor_1, valor_2){
    return valor_1 < valor_2
}

export function map_vetor(funcao, vetor){

    const new_array = new Array(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        new_array[i] = funcao(vetor[i])
    }

    return new_array
}

export function filter_vetor(funcao, vetor){

    let new_array = new Array(0)

    let j = 0
    for(let i = 0; i < vetor.length; i++){
        if(funcao(vetor[i])){
            new_array[j] = vetor[i]
            j++
        }
    }
    return new_array
}

export function reduce_vetor_teste(funcao_acumuladora, vetor){

    let retorno = vetor[0]

    for(let i = 1; i < vetor.length; i++){
        retorno = funcao_acumuladora(retorno, vetor[i])
    }
    return retorno
}
