import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const N = Number(input('Digite um valor: '))

    pegar_soma_de_todos_ate_n(N)

}

function pegar_soma_de_todos_ate_n(N){

    let soma = N

    for(let i = 1;i < N;i++){
        soma += i
    }
    console.log(`A soma resultante é igual a ${soma}`)
}


main()