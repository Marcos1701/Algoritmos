import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const N = Number(input('Digite o valor de N: '))

    pegar_sequencia_e_soma(N)

}


function pegar_sequencia_e_soma(N){

    let soma = 0
    for(let i = 1; i <= N;i++){
        if(i % 2 !== 0){
          soma += 1 / i
        }else{
          soma -= 1 / i
        }
    }
    console.log(`S = ${soma.toFixed(2)}`)
}


main()