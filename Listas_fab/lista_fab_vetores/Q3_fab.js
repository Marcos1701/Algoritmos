import {input, pegar_array} from './funcoes_ocultas.js'


function main(){

    console.log('Digite a qtd de elementos que serão inseridos: ')
   const qtd = Number(input('=> '))

   console.log('Array A: ')
   const array_a = pegar_array(qtd)

   console.log('Array B: ')
   const array_b = pegar_array(qtd)

   const array_c = somatorio_arrays(array_a, array_b, qtd)
   console.log(array_c)
}


function somatorio_arrays(array_a, array_b, qtd){

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


main()