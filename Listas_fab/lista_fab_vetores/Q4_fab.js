import {input, pegar_array} from './funcoes_ocultas.js'


function main(){

   console.log('Digite a qtd de elementos que serão inseridos: ')
   const qtd = Number(input('=> '))

   console.log('Array A: ')
   const array_a = pegar_array(qtd)

   console.log('Array B: ')
   const array_b = pegar_array(qtd)

   const array_uniao = pegar_conjunto_uniao(array_a, array_b)
   console.log(array_uniao)

   const array_intersercção = pegar_conjunto_interseccao(array_a, array_b)
   console.log(array_intersercção)
}


function pegar_conjunto_uniao(array_a, array_b){

    const  array_somatorio = [...array_a,...array_b]
    //const  array_resultante = new Array(qtd * 2)
      
    let array_uniao = []
    

    for(let i = 0; i < array_somatorio.length;i++){

     if(!(num_ocorrencias_valor(array_somatorio[i], array_uniao))){
         array_uniao += array_somatorio[i]
     }

    }
    
    return array_uniao
}


function pegar_conjunto_interseccao(array_a, array_b){

    const  array_somatorio = [...array_a,...array_b]
   // const  array_resultante = new Array(qtd * 2)
      
   let array_resultante = []
    

    //let contador = 0
    for(let i = 0; i < array_somatorio.length;i++){

     if(num_ocorrencias_valor(array_somatorio[i], array_resultante)){
        array_resultante += array_somatorio[i]
        //contador++
     }

    }

    return array_resultante
}


function num_ocorrencias_valor(valor,colecao){

    let contador = 0
    for(let i = 0; i < colecao.length; i++){
        if(valor === colecao[i]){
            contador++
        }
    }

    return (contador > 1)
}



main()