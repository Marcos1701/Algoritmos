import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const N = 99

    pegar_sequencia_e_soma(N)

}


function pegar_sequencia_e_soma(N){

    let soma = 0
    let dividendo = 1
    for(let i = 1; i <= N;i++){
        soma += dividendo / i
        dividendo += 2
    }
    console.log(`S = ${soma.toFixed(2)}`)
}


main()