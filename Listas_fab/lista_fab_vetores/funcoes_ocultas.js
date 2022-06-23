import prompt from 'prompt-sync'
export const input = prompt()

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
