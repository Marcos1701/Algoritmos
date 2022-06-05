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
        if(i % 2 !== 0){
        soma += i / divisor
        }else{
            soma -= divisor / i
        }
        divisor--
    }
    console.log(`S = ${soma.toFixed(2)}`)
}


main()