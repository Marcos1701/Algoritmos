import prompt from 'prompt-sync';
const input = prompt()

function main(){

    const valor_max = Number(input('Digite um valor: '))

    somatorio_valores(valor_max)

}


function somatorio_valores(valor_max){
    let valor_soma = 1
    let somatorio = 0

    while(valor_soma <= valor_max){
        somatorio+= valor_soma
        valor_soma++
    }
    console.log(`resultado da soma = ${somatorio}`)
}

main()