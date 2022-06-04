import prompt from 'prompt-sync';
const input = prompt()



function main(){
    const N = Number(input('Digite o valor de N: '))

    pegar_sequencia_ate_N(N)

}

function pegar_sequencia_ate_N(N){

    for(let i = 1;i <= N;i++){
        console.log(i)
}

}


main()