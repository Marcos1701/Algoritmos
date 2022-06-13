import prompt from 'prompt-sync'
import {pegar_array, num_ocorrencias_valor} from './funcoes_ocultas.js'
const input = prompt()



function main(){

    console.log('Digite o número de elementos que serão inceridos: ')
    const qtd = Number(input('=> '))
    const Array_a = pegar_array(qtd)

    const msg_retorno = conferir_se_ha_valores_iguais(Array_a)

    console.log(msg_retorno)

}



function conferir_se_ha_valores_iguais(array){


    for(let valor of array){
        if(num_ocorrencias_valor(valor, array)){
            return 'Há valores repetidos!!'
        }
    }
    return 'Não há valores repetidos'
}

main()