import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')


function main(){

    const vetor = input.split('\n')

    const vetor_invertido = inverter_vetor(vetor)

    retornar_vetor(vetor_invertido)

}


function inverter_vetor(vetor){
 
    //const vetor_retorno = new Array(vetor.length)
    const vetor_retorno = new Array(20)

    let indice = vetor.length - 1
    for(let i = 0; i < vetor.length; i++){
        vetor_retorno[i] = vetor[indice]
        indice--
    }

    return vetor_retorno
}


function retornar_vetor(vetor){

    for(let i = 0; i < vetor.length; i++){
        console.log(`N[${i}] = ${vetor[i]}`)
    }

}


main()