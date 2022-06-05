import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const N = Number(input('Digite o valor de N: '))

    pegar_sequencia_e_soma(N)

}


function pegar_sequencia_e_soma(N){

    let soma = N
    let divisor = N
    for(let i = 1; i < N;i++){
        soma += i / divisor
        divisor--
    }
    console.log(`Soma resultante = ${soma.toFixed(2)}`)
}


main()