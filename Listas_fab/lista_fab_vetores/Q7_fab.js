import {pegar_array, input} from './funcoes_ocultas.js'

function main(){

    const qtd_elementos = Number(input('Qtd elementos: '))

    console.log('Vetor A: ')
    const vetor_A = pegar_array(qtd_elementos)

    const vetor_b = gerar_vetor_b(vetor_A, qtd_elementos)

    console.log(vetor_b)
}

function gerar_vetor_b(vetor, qtd){

    const vetor_b = new Array(qtd)

    for(let i = 0; i < qtd; i++){

        if(vetor[i] % 2 !== 0){
            vetor_b[i] = 1
        }else{
            vetor_b[i] = 0
        }
    }
    return vetor_b
}

main()