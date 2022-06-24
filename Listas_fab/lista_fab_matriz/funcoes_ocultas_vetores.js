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